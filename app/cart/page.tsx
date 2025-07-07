"use client"
import { useState } from 'react'
import neyor from '../../public/neyor.png'
import Image from 'next/image'

export default function page() {
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <div>ตะกร้าของคุณ</div>
            <div>
                <div className="bg-white rounded-xl p-4 mt-2 flex md:w-130">
                    <div className=''>
                        <Image
                            src={neyor}
                            alt=""
                            className="rounded-xl shadow-lg w-50"
                        />
                    </div>
                    <div className='ml-4 w-full'>
                        <div className='text-xl'>ขนมปังกรอบเนยน้ำตาล</div>
                        <div className='truncate w-50 md:w-70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto ipsum est, inventore vel rerum. Quasi animi possimus voluptatem ducimus officiis suscipit optio necessitatibus magnam beatae deleniti corrupti, corporis vel.

                        </div>
                        <div className='w-full gap-6 items-center flex justify-center place-content-center mt-10'>
                            <button onClick={() => setAmount(n => Math.max(0, n - 1))}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-400 hover:bg-red-600 rounded-2xl">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                            <span className='text-2xl'>{amount}</span>
                            <button onClick={() => setAmount(n => n + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-400 hover:bg-green-600 rounded-2xl">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
