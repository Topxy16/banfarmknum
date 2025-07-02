'use client'

import { useState } from "react"
import neyor from '../../public/neyor.png'
import Image from 'next/image'

type OrderDetailModalProps = {
    show: boolean
    onClose: () => void
}

export default function OrderDetailModal({ show, onClose }: OrderDetailModalProps) {

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
                    <div>#9324872</div>
                </div>
                <div className="ml-2">
                    <div>วันที่สั่ง : 02/07/2025</div>
                    <div>ชื่อผู้สั่งสินค้า : พี่ชาวี</div>
                    <div>เบอร์โทรศัพท์ : 0926166623</div>
                </div>
                <div className="bg-gray-200 rounded-2xl p-4 mt-2">
                    <div className="text-xl mb-1">รายการสินค้า</div>
                    <div className="flex place-content-between">

                        <div className="">🧈 เนยน้ำตาล</div>
                        <div className="font-bold mr-4">1</div>
                    </div>
                    <div className="flex place-content-between">

                        <div className="">🐷 พริกเผาหมูหยอง</div>
                        <div className="font-bold mr-4">1</div>
                    </div>
                    <div className="flex place-content-between mt-1 p-1">
                        <div>รวม</div>
                        <div>200</div>
                    </div>
                </div>
                <div className="mt-2 flex place-content-between items-center">
                    <div className="">วันที่ต้องส่ง : 04/07/2025</div>
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
