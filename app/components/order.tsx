'use client'
import { useEffect, useState } from "react"
import AddOrder from '../components/order_add'
import DetaillOrder from '../components/order_detail'
import UpdateOrder from '../components/order_update'
import DeleteOrder from '../components/order_delete'

type OrderType = {
    o_ID: number,
    u_userName: string,
    de_tel: number,
    o_date: string,
    o_endDate: string,
    o_image: string,
    o_Status: number,
    i_Price: number,
    p_Name: string,
    p_Detail: string
    latitude: string,
    longitude: string
    de_firstName: string,
    de_lastName: string,
}
type OrderItemType = {
    i_ID: number
    i_Amount: number,
    p_ID: number,
    p_Name : string
}

type dateEnd = {
    o_dateEnd: string
}

export default function Order({ order }: { order: OrderType[] }) {
    const [showorder_add, setShoworder_add] = useState(false)
    const [showorder_detail, setShoworder_detail] = useState(false)
    const [showorder_update, setShoworder_update] = useState(false)
    const [showorder_dalete, setShoworder_dalete] = useState(false)
    const [o_ID , seto_ID] = useState<number>(0)
    const [orderItemData, setOrderItem] = useState<OrderItemType[]>([])
    const [orderdateEnd, setorderdateEnd] = useState<dateEnd>()
    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleString('th-TH');
    };
     const handleDelete = async (id: number) => {
        const token = localStorage.getItem('token')
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/deleteOrder/` + id, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })
            const resData = await res.json()
            if (resData.status === 1) {
                console.log('Delete Order Successfully')
            } else if (resData.status === 0) {
                console.log('Delete Order Unsuccessfully')
            }
             setShoworder_dalete(false)
        } catch (error) {
            console.log(error)
            console.log('Delete Product Unsuccessfully')
            setShoworder_dalete(false)
        }
    }
    const updateStatus = async (id:number)=>{
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/updateStatusOrder`,{
            method: 'PATCH',
            headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json'
            },
             body: JSON.stringify({ o_ID: id })
        })
        const resData = await res.json()
        if( resData.status === 1){
            console.log(`   เปลี่ยนสถานะได้`) 
        }else if (resData.status === 0) {   
            console.log(`ไม่สามารถเปลี่ยนสถานะได้`)
        }
    }
    const fetchendDate = async (id:number)=> {
         const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/getdateEnd/`+id,{
             headers: {
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json'  
                },
        })
        const resData = await res.json()
        if (resData.status === 0){
            console.log(`ไม่สามารถดึงข้อมูลวันที่ส่งในออเดอร์ หมายเลข  ${id}`)
        }
        setorderdateEnd(resData.data)
    }
    
    const fetchOrdersItem = async (id:number)=>{
        const token = localStorage.getItem('token')
        const res = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/ordersitems/`+id,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json'  
                },
        })
        const resData = await res.json()
        if (resData.status === 0){
            console.log(`ไม่สามารถดึงข้อมูลสินค้าในออเดอร์ หมายเลข  ${id}`)
        }
        setOrderItem(resData.data)
    }    
    return (
        <div>
            <AddOrder show={showorder_add} onClose={() => setShoworder_add(false)} />
            <DetaillOrder show={showorder_detail} onClose={() => setShoworder_detail(false)} />
            <UpdateOrder show={showorder_update} orderdateEnd={orderdateEnd} orderItemData={orderItemData} onClose={() => setShoworder_update(false)} />

            <div className="phone md:hidden">
                <button className="w-full bg-green-900 rounded-xl p-2 mt-2 text-white text-2xl flex items-center place-content-between" onClick={() => { setShoworder_add(true) }}>
                    <div className="">เพิ่มออเดอร์</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <div className="bg-white rounded-xl text-black text-xl mt-2 p-4 shadow-xl">
                    <div className="flex gap-3 text-lg mb-4">
                        <div className="bg-zinc-600 text-black font-semibold p-1 rounded-lg">#0001</div>
                        <div className="bg-zinc-600 text-black p-1 rounded-lg">ชื่อคนสั่ง</div>
                        <div className="bg-green-200 text-green-900 p-1 rounded-lg">สถานะ : จัดส่งแล้ว</div>
                        <div className="ml-2.5">
                            <button onClick={() => setShoworder_detail(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 rounded-4xl hover:bg-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex place-content-between mt-2 items-center">
                        <div className="bg-amber-600 rounded-lg px-1 text-white">ต้องส่ง : 02/07/2025</div>
                        <div className="flex">
                            <div className="bg-zinc-500 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div className="bg-red-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div className="bg-yellow-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => { setShoworder_update(true) }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="relative overflow-x-auto shadow-md rounded-xl">
                    <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-lg text-white uppercase bg-zinc-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">
                                    เลขออร์เดอร์
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    วันที่สั่ง
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    ชื่อผู้สั่งสินค้า
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    เบอร์โทรศัพท์
                                </th>

                                <th scope="col" className="px-6 py-3 ">
                                    วันที่ต้องส่ง
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    สถานะออเดอร์
                                </th>
                                <th scope="col" className="px-6 py-3 flex place-content-between text-center">
                                    <div className="mt-1.5">เครื่องมือ</div>
                                    <button onClick={() => setShoworder_add(true)} className='bg-green-900 hover:bg-green-700 rounded-xl p-1 text-white flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((item, index) => (
                                <tr key={index} className="bg-white text-black">
                                    <th scope="row" className="px-6 py-4">
                                        {item.o_ID}
                                    </th>
                                    <td className="px-6 py-4">
                                        {formatDate(item.o_date)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.u_userName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.de_tel}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatDate(item.o_date)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.o_Status  === 0 ? <div>กำลังรอจัดส่ง</div> :
                                        item.o_Status  === 1 ? <div>ส่งสำเร็จแล้ว</div> : null
                                        }
                                    </td>
                                    <td className="px-6 py-4 flex">
                                        <div className="flex">
                                        <div className="bg-green-900 hover:bg-green-600 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                            <button onClick={() => {updateStatus(item.o_ID)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            </button>
                                        </div>
                                        <div className="bg-red-900 hover:bg-red-600 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                            <button  onClick={() => {seto_ID(item.o_ID), setShoworder_dalete(true)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            </button>
                                        </div>
                                        <div className="bg-yellow-900 hover:bg-yellow-600 text-white rounded-lg ml-1 px-2 h-10 pt-2" >
                                            <button onClick={() => {setShoworder_update(true),fetchOrdersItem(item.o_ID),fetchendDate(item.o_ID)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteOrder
                show={showorder_dalete}
                title="ลบออเดอร์"
                message="คุณแน่ใจหรือไม่ว่าต้องการลบออเดอร์นี้?"
                confirmText="ลบ"
                secondaryText="ยกเลิก"
                onConfirm={() => {
                    handleDelete(o_ID)
                    setShoworder_dalete(false)
                }}
                onSecondary={() => setShoworder_dalete(false)}
            />
        </div>
    )
}