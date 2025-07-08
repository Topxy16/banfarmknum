'use client'
import React, { useState } from 'react'

type UpdateOrderModalProps = {
  show: boolean
  onClose: () => void
  o_ID : number
}
export default function UpdateOrderModal({o_ID, show, onClose }: UpdateOrderModalProps) {
  if (!show) return null
  const [butterQty, setButterQty] = useState(0)
  const [porkQty, setPorkQty] = useState(0)
  console.log(o_ID)
  // const handleSubmit = async () => {
  //   const token = localStorage.getItem('token')
  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/updateOrder`, {
  //       method: 'PATCH',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify({

  //       }),
  //     })
  //     const data = await res.json()
  //     if (data.status === 1) {
  //       console.log('✅ แก้ไขข้อมูลออเดอร์แล้ว:')
  //     } else if (res.status === 0) {
  //       console.error('❌ แก้ไขข้อมูลออเดอร์ม่สำเร็จ:')
  //     }
  //     onClose()
  //   } catch (err) {
  //     console.error('❌ แก้ไขข้อมูลออเดอร์ไม่สำเร็จ:', err)
  //   }
  // }

  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className='bg-yellow-900 rounded-xl'>
        <div className="text-3xl font-bold text-white p-4">แก้ไขข้อมูลออเดอร์</div>
        <div className="bg-white shadow-xl w-90 p-6 md:w-120">

          <div className="space-y-3">
            <div className='text-sm'>วันที่สั่ง</div>
            <input type="date"
              className='bg-gray-200 hover:bg-gray-300 rounded-xl p-2 w-full' />
            <div className='text-sm'>ข้อมูลผู้สั่ง</div>
            <div className='flex gap-2'>
              <input type="text" className='flex-1 bg-gray-200 hover:bg-gray-300 rounded-xl p-2 w-full' placeholder='ชื่อผู้สั่งสินค้า' />
              <input type="tel" className='flex-1 bg-gray-200 hover:bg-gray-300 rounded-xl p-2 w-full' placeholder='เบอร์โทรศัพท์' />
            </div>

            <div>
              <div className='text-sm'>สินค้า</div>
              <div className='items-center grid grid-cols-2 gap-2'>
                <div className='md:text-xl'>🧈 เนยน้ำตาล</div>
                <div className='gap-2 flex'>
                  <button onClick={() => setButterQty(b => Math.max(0, b - 1))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400 hover:bg-red-600 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <span>{butterQty}</span>
                  <button onClick={() => setButterQty(b => b + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-400 hover:bg-green-600 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
                <div className='md:text-xl'>🐷 พริกเผาหมูหยอง</div>
                <div className='gap-2 flex'>
                  <button onClick={() => setPorkQty(p => Math.max(0, p - 1))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400 hover:bg-red-600 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <span>{porkQty}</span>
                  <button onClick={() => setPorkQty(p => p + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-400 hover:bg-green-600 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='text-sm'>วันที่ต้องส่ง</div>
            <input type="date"
              className='bg-gray-200 hover:bg-gray-300 rounded-xl p-2 w-full' />
            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
              >
                ยกเลิก
              </button>
              <button
                className="bg-yellow-900 text-white px-4 py-2 rounded-xl hover:bg-yellow-700"
              >
                แก้ไขข้อมูลออเดอร์
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
