'use client'
import { useEffect, useState } from "react"
import AddOrder from '../components/order_add'
import DetaillOrder from '../components/order_detail'
import UpdateOrder from '../components/order_update'
import DeleteOrder from '../components/order_delete'
import AlertSuccessDel from '../components/alertSuccess'
import AlertSuccessUpStatus from '../components/alertSuccess'
import AlertFdel from '../components/alertFail'
import AlertFstatus from '../components/alertFail'

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
    p_Name: string
}

type dateEnd = {
    o_ID: number,
    o_endDate: string
}

type userType = {
    u_ID: number,
    u_userName: string
}
export default function Order({ order }: { order: OrderType[] }) {

    const [searchTerm, setSearchTerm] = useState('')

    const filteredOrders = order.filter((item) =>
        item.u_userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.de_tel.toString().includes(searchTerm) ||
        item.o_ID.toString().includes(searchTerm)
    )

    const [setalertdel, setAlertdel] = useState(false)
    const [setalertfdel, setAlertfdel] = useState(false)
    const [setalertupstatus, setAlertupStatus] = useState(false)
    const [setalertfupstatus, setAlertfupStatus] = useState(false)
    const [showorder_add, setShoworder_add] = useState(false)
    const [showorder_detail, setShoworder_detail] = useState(false)
    const [showorder_update, setShoworder_update] = useState(false)
    const [showorder_dalete, setShoworder_dalete] = useState(false)
    const [o_ID, seto_ID] = useState<number>(0)
    const [orderItemData, setOrderItem] = useState<OrderItemType[]>([])
    const [userData, setUserData] = useState<userType[]>([])
    const [orderdateEnd, setorderdateEnd] = useState<dateEnd>()
    const [orderSelect, setorderSelect] = useState<OrderType>()
    const [sum, setSum] = useState<number>(0)
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
                setShoworder_dalete(false)
                setAlertdel(true)
                setTimeout(() => {
                    setAlertdel(false)
                }, 2000);

            } else if (resData.status === 0) {
                setShoworder_dalete(false)
                setAlertfdel(true)
                setTimeout(() => {
                    setAlertfdel(false)
                }, 2000);
            }

        } catch (error) {
            console.log(error)
            console.log('Delete Product Unsuccessfully')
            setShoworder_dalete(false)
        }
    }
    const updateStatus = async (id: number) => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/updateStatusOrder`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ o_ID: id })
        })
        const resData = await res.json()
        if (resData.status === 1) {

            setAlertupStatus(true)
            setTimeout(() => {
                setAlertupStatus(false)
            }, 2000);
        } else if (resData.status === 0) {
            setAlertfupStatus(true)
            setTimeout(() => {
                setAlertfupStatus(false)
            }, 2000);
        }
    }
    const fetchendDate = async (id: number) => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/getdateEnd/` + id, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
        })
        const resData = await res.json()
        if (resData.status === 0) {
            console.log(`ไม่สามารถดึงข้อมูลวันที่ส่งในออเดอร์ หมายเลข  ${id}`)
        }
        setorderdateEnd(resData.data)
    }
    const fetchUser = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/allUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
        })
        const resData = await res.json()
        setUserData(resData.data)
    }
    const fetchOrdersItem = async (id: number) => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/ordersitems/` + id, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
        })
        const resData = await res.json()
        if (resData.status === 0) {
            console.log(`ไม่สามารถดึงข้อมูลสินค้าในออเดอร์ หมายเลข  ${id}`)
        }
        setOrderItem(resData.data)
    }
    const fetchPrice = async (id: number) => {
        const token = localStorage.getItem('token')
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/sumPrice/` + id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })
            const resData = await res.json()
            setSum(resData.data)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <div className="mb-4 mt-4 flex justify-end">
                <input
                    type="text"
                    placeholder="ค้นหาเลขออเดอร์ / ชื่อ / เบอร์"
                    className="bg-white p-2 rounded-xl w-full md:text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={() => { fetchUser(), setShoworder_add(true) }}
                    className="bg-green-900 hover:bg-green-700 rounded-xl px-4 py-2 text-white min-w-30 ml-2">
                    เพิ่มรายการ
                </button>
            </div>

            <div className="phone md:hidden">

                {order.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl text-black text-xl mt-2 p-4 shadow-xl">
                        <div className="flex gap-3 text-lg mb-4">
                            <div className="bg-zinc-600 text-black font-semibold p-1 rounded-lg min-w-10 text-center">{item.o_ID}</div>
                            <div className="bg-zinc-600 text-black p-1 rounded-lg min-w-15 text-center">{item.u_userName}</div>
                            <div className="bg-green-200 text-green-900 p-1 rounded-lg min-w-25 text-center">
                                {item.o_Status === 0 ? <div>รอจัดส่ง</div> :
                                    item.o_Status === 1 ? <div>จัดส่งสำเร็จ</div> : null}</div>
                            <div className="flex-1">
                                <button onClick={() => { fetchPrice(item.o_ID), fetchOrdersItem(item.o_ID), fetchendDate(item.o_ID), seto_ID(item.o_ID), setorderSelect(item), setShoworder_detail(true) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 rounded-4xl hover:bg-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex place-content-between mt-2 items-center">
                            <div className="bg-amber-600 rounded-lg px-1 text-white">ต้องส่ง : {formatDate(item.o_endDate)}</div>
                            <div className="flex">
                                <div onClick={() => { updateStatus(item.o_ID) }} className="bg-zinc-500 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div onClick={() => { seto_ID(item.o_ID), setShoworder_dalete(true) }} className="bg-red-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div onClick={() => { setShoworder_update(true), seto_ID(item.o_ID), fetchOrdersItem(item.o_ID), fetchendDate(item.o_ID) }} className="bg-yellow-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden md:block">
                <div className="relative overflow-x-auto shadow-md rounded-xl">
                    <table className="w-full text-lg text-left text-gray-500">
                        <thead className="text-lg text-white uppercase bg-zinc-100">
                            <tr>
                                <th className="px-6 py-3">เลขออร์เดอร์</th>
                                <th className="px-6 py-3">วันที่สั่ง</th>
                                <th className="px-6 py-3">ชื่อผู้สั่งสินค้า</th>
                                <th className="px-6 py-3">เบอร์โทรศัพท์</th>
                                <th className="px-6 py-3">วันที่ต้องส่ง</th>
                                <th className="px-6 py-3">สถานะออเดอร์</th>
                                <th className="px-6 py-3 flex justify-between">
                                    <span className="mt-1.5">เครื่องมือ</span>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((item, index) => (
                                <tr key={index} className="bg-white text-black border-t">
                                    <th className="px-6 py-4">{item.o_ID}</th>
                                    <td className="px-6 py-4">{formatDate(item.o_date)}</td>
                                    <td className="px-6 py-4">{item.u_userName}</td>
                                    <td className="px-6 py-4">{item.de_tel}</td>
                                    <td className="px-6 py-4">{formatDate(item.o_endDate)}</td>
                                    <td className="px-6 py-4">
                                        {item.o_Status === 0 ? 'กำลังรอจัดส่ง' : 'ส่งสำเร็จแล้ว'}
                                    </td>
                                    <td className="px-6 py-4 flex justify-between">
                                        <div className="flex">
                                            <button
                                                onClick={() => updateStatus(item.o_ID)}
                                                className="bg-green-900 hover:bg-green-600 text-white rounded-lg ml-1 px-2 h-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => { seto_ID(item.o_ID); setShoworder_dalete(true) }}
                                                className="bg-red-900 hover:bg-red-600 text-white rounded-lg ml-1 px-2 h-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => { setShoworder_update(true); seto_ID(item.o_ID); fetchOrdersItem(item.o_ID); fetchendDate(item.o_ID) }}
                                                className="bg-yellow-900 hover:bg-yellow-600 text-white rounded-lg ml-1 px-2 h-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <button className="mt-4 mr-1" onClick={() => {
                                            fetchPrice(item.o_ID)
                                            fetchOrdersItem(item.o_ID)
                                            fetchendDate(item.o_ID)
                                            seto_ID(item.o_ID)
                                            setorderSelect(item)
                                            setShoworder_detail(true)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 rounded-4xl hover:bg-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <AlertSuccessDel message='ลบออเดอร์สำเร็จ' detail='' show={setalertdel} onClose={() => { setAlertdel }} />
            <AlertSuccessUpStatus message='ส่งสำเร็จแล้ว' detail='' show={setalertupstatus} onClose={() => { setAlertupStatus }} />
            <AlertFdel message='ลบออเดอร์ไม่สำเร็จ' detail='' show={setalertfdel} onClose={() => { setAlertfdel }} />
            <AlertFstatus message='ส่งไม่สำเร็จแล้ว' detail='' show={setalertfupstatus} onClose={() => { setAlertfupStatus }} />
            <AddOrder show={showorder_add} userData={userData} onClose={() => setShoworder_add(false)} />
            <DetaillOrder show={showorder_detail} sum={sum} orderSelect={orderSelect} orderdateEnd={orderdateEnd} orderItemData={orderItemData} onClose={() => setShoworder_detail(false)} />
            <UpdateOrder show={showorder_update} o_ID={o_ID} orderdateEnd={orderdateEnd} orderItemData={orderItemData} onClose={() => setShoworder_update(false)} />
            <DeleteOrder
                show={showorder_dalete}
                title="ลบออเดอร์"
                message="คุณแน่ใจหรือไม่ว่าต้องการลบออเดอร์นี้?"
                confirmText="ลบ"
                secondaryText="ยกเลิก"
                onConfirm={() => {
                    handleDelete(o_ID)
                }}
                onSecondary={() => setShoworder_dalete(false)}
            />
        </div>
    )
}