'use client'

import React, { useState } from 'react'

type AddOrderModalProps = {
  show: boolean
  onClose: () => void
}

export default function AddOrderModal({ show, onClose }: AddOrderModalProps) {
  const [u_userName, setU_username] = useState('')
  const [de_tel, setDe_tel] = useState('')
  const [o_Status, setO_status] = useState('')
  const [o_image, setO_image] = useState<File | null>(null)
  const [i_Amount, setI_amount] = useState('')
  const [i_Price, setI_price] = useState(100)
  const [p_Name, setP_name] = useState('')
  const [p_Detail, setP_detail] = useState('')
  const [p_Img, setP_img] = useState<File | null>(null)
  const [o_date, setO_date] = useState('')
  const [o_endDate, setO_endDate] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longtitude, setLongtitude] = useState('')
  const [o_preview, setO_preview] = useState<string | null>(null)
  const [p_preview, setP_preview] = useState<string | null>(null)
  const [butterQty, setButterQty] = useState(0)
  const [porkQty, setPorkQty] = useState(0)

  const PRICE = 100
  const totalPrice = (butterQty + porkQty) * PRICE

  if (!show) return null

  const handleSubmit = async () => {
    const token = localStorage.getItem('token')
    try {
      const res = await fetch('https://bnvw3t5t-8080.asse.devtunnels.ms/api/order/addOrders', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          'u_userName': u_userName,
          'de_tel': de_tel,
          'p_Name': butterQty > 0 && porkQty > 0
            ? 'เนยน้ำตาล, พริกเผาหมูหยอง'
            : butterQty > 0
              ? 'เนยน้ำตาล'
              : porkQty > 0
                ? 'พริกเผาหมูหยอง'
                : '',
          'p_Detail': p_Detail,
          'i_Amount': i_Amount,
          'i_Price': i_Price,
          'o_endDate': o_endDate,
        }),
      })
      const data = await res.json()
      console.log('✅ เพิ่มออเดอร์แล้ว:', data)
      onClose()
    } catch (err) {
      console.error('❌ เพิ่มออเดอร์ไม่สำเร็จ:', err)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-90 p-6 md:w-120">
        <h2 className="text-2xl font-bold text-center mb-4">เพิ่มออเดอร์</h2>
        <div className="">

          <div className='text-xl'>วันที่ต้องส่ง</div>
          <input
            type="date"
            className="w-full border-b-3 border-amber-900 p-2 rounded"
            onChange={(e) => setO_endDate(e.target.value)}
          />

          <div className='text-xl mt-4'>ข้อมูลผู้สั่ง</div>
          <div className='flex gap-2'>
            <input
              type="text"
              className='flex-1 p-1 border-b-3 border-amber-900 rounded'
              placeholder='ชื่อ'
              onChange={(e) => setU_username(e.target.value)}
            />
            <input
              type="text"
              className='flex-1 p-1 border-b-3 border-amber-900 rounded'
              placeholder='เบอร์โทรศัพท์'
              onChange={(e) => setDe_tel(e.target.value)}
            />
          </div>


          <div className=''>
            <div className='text-xl mt-4'>สินค้า</div>
            <div className='items-center grid grid-cols-2 gap-2 md:flex'>
              <div>🧈 เนยน้ำตาล</div>
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
              <div className=''>🐷 พริกเผาหมูหยอง</div>
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

          <div className='flex gap-2 py-1 mt-2 items-center justify-center bg-amber-400 hover:bg-amber-600 text-white rounded-xl'>
            <div>เพิ่มที่อยู่การจัดส่ง</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>

          <div className='text-2xl flex place-content-between p-2 mt-4 rounded-xl bg-green-300 text-white font-bold'>
            <div>รวม</div>
            <div>{totalPrice}</div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              เพิ่มออเดอร์
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
