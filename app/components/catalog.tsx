"use client"
import neyor from '../../public/neyor.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
type catalogType = {
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
type PropsType = {
    catalog: catalogType[]
}

export default function Catalog({ catalog }: PropsType) {

    const router = useRouter()
    const addToCart = (product: catalogType,status : number) => {
        console.log(status)
        const cartString = localStorage.getItem('cart')
        let cart: { p_ID: number; i_Amount: number }[] = cartString ? JSON.parse(cartString) : []
        const checkCart = cart.some(item => item.p_ID === product.p_ID)
        if (checkCart) {
            alert(`${product.p_Name} มีอยู่ในตะกร้าแล้ว`)
            return
        }
        cart.push({ ...product, i_Amount: 1 })
        localStorage.setItem('cart', JSON.stringify(cart))
        if(status == 1) {
            router.push('/cart')
            alert(`เพิ่ม ${product.p_Name} เข้าตะกร้าเรียบร้อย`)
        }else{
            alert(`เพิ่ม ${product.p_Name} เข้าตะกร้าเรียบร้อย`)
        }
        
    }

    return (
        <div className='md:grid grid-cols-3 gap-2'>
            {catalog.map((item: catalogType) => (
                <div key={item.p_ID} className="bg-white rounded-xl p-4 mt-2 flex md:w-130">
                    <div>
                        <Image
                            src={neyor}
                            alt=""
                            className="rounded-xl shadow-lg w-50"
                        />
                    </div>
                    <div className='ml-4 w-full'>
                        <div className='text-xl'>{item.p_Name}</div>
                        <div className='truncate w-50 md:w-70'>{item.p_Detail}</div>
                        <div>
                            <div className='flex place-content-between mt-10 md:mt-14'>
                                <button className='w-40 rounded-xl bg-green-300 p-1 md:w-70' onClick={() => addToCart(item,1)} >สั่งสินค้า</button>
                                <button className='w-full rounded-xl bg-green-300 ml-1 p-1'onClick={() => addToCart(item,0)} >
                                    เพิ่มเข้าตะกร้า
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}