"use client"
import { useState } from 'react'
import neyor from '../../public/neyor.png'
import Image from 'next/image'

export default function page() {
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <div>ตะกร้าของคุณ</div>
            <div className='gap-4 md:flex'>
                <div className='bg-white rounded-xl p-2.5 h-110 mt-2 mb-4'>
                    <div className="bg-white drop-shadow-2xl rounded-xl p-4 flex md:w-300">
                        <div className=''>
                            <Image
                                src={neyor}
                                alt=""
                                className="rounded-xl shadow-lg w-50"
                            />
                        </div>
                        <div className='ml-4 w-full'>
                            <div className='flex place-content-end mb-2 md:absolute top-2 left-290'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-8 hover:bg-red-200 rounded-2xl">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div className='text-xl'>ขนมปังกรอบเนยน้ำตาล</div>
                            <div className='truncate w-50 md:w-70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto ipsum est, inventore vel rerum. Quasi animi possimus voluptatem ducimus officiis suscipit optio necessitatibus magnam beatae deleniti corrupti, corporis vel.

                            </div>
                            <div className='w-full gap-6 flex place-content-end mt-4 md:mt-20'>
                                <button onClick={() => setAmount(n => Math.max(0, n - 1))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-400 hover:bg-red-200 rounded-2xl">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                                <span className='text-2xl'>{amount}</span>
                                <button onClick={() => setAmount(n => n + 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-400 hover:bg-green-200 rounded-2xl">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full md:mt-2'>
                    <div className='bg-white drop-shadow-2xl p-6 rounded-xl text-center h-110'>
                        <div className='text-3xl'>สรุปการสั่งซื้อ</div>
                        <div className='flex place-content-between opacity-50 mt-6'>
                            <div>สินค้า</div>
                            <div>จำนวน</div>
                        </div>
                        <hr className='opacity-50' />
                        <div className='flex place-content-between space-y-4 mt-2 text-xl'>
                            <div>ขนมปังกรอบ</div>
                            <div>100</div>
                        </div>
                        <div className='opacity-50 text-start mt-8'>ยอดรวม</div>
                        <hr className='opacity-50' />
                        <div className='text-2xl text-end'>200</div>
                        <div className='absolute bottom-0 left-0 w-full p-4'>
                            <div className='bg-green-900 hover:bg-green-700 text-white p-2 rounded-xl text-center text-2xl'>
                                ยืนยันคำสั่งซื้อ
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
