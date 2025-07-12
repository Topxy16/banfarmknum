"use client"
import { useState,useEffect } from 'react'
import neyor from '../../public/neyor.png'
import Image from 'next/image'
type cartType = {
    p_ID: number,
    p_Name: string,
    p_Detail: string,
    p_Price: number,
    i_Amount: number,
    c_Name: string,
    c_ID: number,
    p_Status: number,
    p_Img: string
    }
type addCartType = {
    p_ID : number,
    i_Amount : number
}
export default function page() {
    const [cart, setCart] = useState<cartType[]>([])
    const [selectedDateTime, setSelectedDateTime] = useState<string>( '')
    const removeFromCart = (p_ID: number) => {
        const updatedCart = cart.filter(item => item.p_ID !== p_ID)
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
    const totalPrice = cart.reduce((sum, item) => sum + item.p_Price * item.i_Amount, 0)
    const HandleAddCart = async ()=>{
        const token = localStorage.getItem('token')
        const addCart: addCartType[] =  cart.map(({ p_ID, i_Amount}) => ({ p_ID, i_Amount }))
        console.log(addCart)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/addCart`,{
                method : "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                o_endDate: new Date(selectedDateTime).toISOString(),
                cart: addCart,
                }),
            })
            const resData = await res.json()
            if(resData.status === 1){
                alert("สั่งสินค้าสำเร็จ")
            }else{
                alert("เกิดข้อผิดพลาด")
            }
        } catch (error) {
            console.log(error)
        }
    }
useEffect(() => {
  const cartLocal = localStorage.getItem('cart')
  if (cartLocal) {
    try {
      const parsedCart = JSON.parse(cartLocal)
      setCart(parsedCart)
      console.log(parsedCart)
    } catch (e) {
      console.error("ไม่สามารถแปลง cart ได้:", e)
    }
    
  }
}, [])
     
    return (
        <div>
            <div>ตะกร้าของคุณ</div>
            <div className='gap-4 md:flex'>
                <div  className='bg-white rounded-xl p-2.5 h-110 mt-2 mb-4'>
                    {cart.map((item : cartType)=> ( 
                        <div key={item.p_ID} className="bg-white drop-shadow-2xl mb-1 rounded-xl p-4 flex md:w-300">
                            <div className=''>
                                <Image
                                    src={neyor}
                                    alt=""
                                    className="rounded-xl shadow-lg w-50"
                                />
                            </div>
                            <div className='ml-4 w-full'>
                                <div onClick={ ()=> removeFromCart(item.p_ID) } className='flex place-content-end mb-2 md:absolute top-2 left-290'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-8 hover:bg-red-200 rounded-2xl">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div className='text-xl'>{item.p_Name}</div>
                                <div className='truncate w-50 md:w-70'> {item.p_Detail}</div>
                                <div className='w-full gap-6 flex place-content-end mt-4 md:mt-20'>
                                    <button onClick={() => {
                                        const updatedCart = cart.map(i =>
                                        i.p_ID === item.p_ID
                                            ? { ...i, i_Amount: Math.max(0, i.i_Amount - 1)  } 
                                            : i
                                        )
                                        setCart(updatedCart)
                                        localStorage.setItem('cart', JSON.stringify(updatedCart))
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-400 hover:bg-red-200 rounded-2xl">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </button>
                                    <span className='text-2xl'>{item.i_Amount}</span>
                                    <button onClick={() => {
                                        const updatedCart = cart.map(i =>
                                        i.p_ID === item.p_ID
                                            ? { ...i, i_Amount: Math.max(0, i.i_Amount + 1) }
                                            : i
                                        )
                                        setCart(updatedCart)
                                        localStorage.setItem('cart', JSON.stringify(updatedCart))
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-400 hover:bg-green-200 rounded-2xl">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='w-full md:mt-2'>
                    <div className='bg-white drop-shadow-2xl p-6 rounded-xl text-center h-110'>
                        <div className='text-3xl'>สรุปการสั่งซื้อ</div>
                            <div className='flex place-content-between opacity-50 mt-6'>
                                <div>สินค้า</div>
                                <div>จำนวน</div>
                            </div>
                            <hr className='opacity-50' />
                            {cart.map((item: cartType) => (
                            <div key={item.p_ID} className='flex place-content-between space-y-4 mt-2 text-xl'>
                                <div>{item.p_Name}</div>
                                <div>{item.i_Amount}</div>
                            </div>
                            ))}
                            <div className='opacity-50 text-start mt-8'>ยอดรวม</div>
                            <hr className='opacity-50' />
                            <div className='text-2xl text-end'>{totalPrice}</div>
                             <input
                                className='bg-gray-200 hover:bg-gray-300 rounded-xl p-2 w-full'
                                type="datetime-local"
                                onChange={(e) => {setSelectedDateTime(e.target.value)}}
                                />
                            <div className='absolute bottom-0 left-0 w-full p-4'>
                                <div onClick={HandleAddCart} className='bg-green-900 hover:bg-green-700 text-white p-2 rounded-xl text-center text-2xl'> 
                                    ยืนยันคำสั่งซื้อ
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
