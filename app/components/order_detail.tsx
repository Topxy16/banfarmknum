'use client'

import { useEffect, useState } from "react"
import neyor from '../../public/neyor.png'
import Image from 'next/image'

type OrderDetailModalProps = {
    show: boolean
    onClose: () => void
    orderSelect : OrderType
    orderItemData : OrderItemType[]
    sum: number
}

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

export default function OrderDetailModal({ show, onClose,orderSelect ,sum ,  orderItemData }: OrderDetailModalProps) {
    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleString('th-TH');
    };
    if (!show) return null
    return (
        <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-xl w-90 max-w-md p-6">
                <button className="w-full place-content-end flex" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 rounded-2xl bg-red-400 hover:bg-red-600 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <div className="text-2xl font-bold text-center mb-4">รายละเอียดออเดอร์</div>
                <div className="flex gap-2 text-xl">
                    <div>เลขออร์เดอร์ : </div>
                    <div>{orderSelect.o_ID}</div>
                </div>
                <div className="ml-2">
                    <div>วันที่สั่ง : {formatDate(orderSelect.o_date)}</div>
                    <div>ชื่อผู้สั่งสินค้า : {orderSelect.u_userName}</div>
                    <div>เบอร์โทรศัพท์ : {orderSelect.de_tel}</div>
                </div>
                <div className="bg-gray-200 rounded-2xl p-4 mt-2">
                    <div className="text-xl mb-1">รายการสินค้า</div>
                    { orderItemData.map( (item:OrderItemType) => (
                        <div className="flex place-content-between" key={item.i_ID}>
                            <div className="">{item.p_Name}</div>
                            <div className="font-bold mr-4">{item.i_Amount}</div>
                        </div>
                    ))}
                    <div className="flex place-content-between mt-1 p-1">
                        <div>รวม</div>
                        <div>{sum}</div>
                    </div>
                </div>
                <div className="mt-2 flex place-content-between items-center">
                    <div className="">วันที่ต้องส่ง : {formatDate(orderSelect.o_endDate)}</div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </button>
                </div>
                <div>
                    <div className="text-xl">หลักฐานการจัดส่ง</div>
                    <div className="mt-1">
                        <Image
                            src={neyor}
                            alt=""
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
