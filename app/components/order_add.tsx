'use client'

import React, { useState } from 'react'
import Alert from '../components/alertSuccess'

type AddOrderModalProps = {
  show: boolean
  onClose: () => void
  userData: userType[]
}

type userType = {
  u_ID: number,
  u_userName: string
}
export default function AddOrderModal({ show, onClose, userData }: AddOrderModalProps) {
  if (!show) return null
  const [setalert, setAlert] = useState(false)
  const [user, setUser] = useState(0)
  const [o_endDate, setO_endDate] = useState('')
  const [butterQty, setButterQty] = useState(0)
  const [porkQty, setPorkQty] = useState(0)

  const PRICE = 100
  const totalPrice = (butterQty + porkQty) * PRICE



  const handleSubmit = async () => {
    const token = localStorage.getItem('token')

    const cart = []

    if (butterQty > 0) {
      cart.push({ p_ID: 13, p_Amount: butterQty })
    }

    if (porkQty > 0) {
      cart.push({ p_ID: 14, p_Amount: porkQty })
    }
    console.log(user)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/addOrder`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          u_ID: user,
          o_endDate: new Date(o_endDate).toISOString(), // แปลงให้เป็น ISO format
          cart: cart,
        }),
      })
      const data = await res.json()
      console.log('✅ เพิ่มออเดอร์แล้ว:', data)
      setAlert(true)
      setTimeout(() => {
        onClose()
        setAlert(false)
      }, 2000);

    } catch (err) {
      console.error('❌ เพิ่มออเดอร์ไม่สำเร็จ:', err)
    }
  }


  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <Alert message='เพิ่มออเดอร์สำเร็จ' detail='' show={setalert} onClose={() => { setAlert }} />
      <div className='bg-green-900 rounded-xl'>
        <div className="text-3xl font-bold text-white p-4">เพิ่มออเดอร์</div>
        <div className="bg-white shadow-xl w-90 p-6 md:w-120">
          <div className="space-y-3">
            <div className='text-sm'>วันที่ต้องส่ง</div>
            <input
              type="date"
              className="w-full bg-gray-200 hover:bg-gray-300 rounded-xl p-2"
              onChange={(e) => setO_endDate(e.target.value)}
            />

            <div className='text-sm'>ข้อมูลผู้สั่ง</div>
            <div className='flex gap-2'>
              <select className='w-full rounded-lg p-1.5 bg-gray-200 hover:bg-gray-300' onChange={(e) => (setUser(Number(e.target.value)))}>
                {userData.map((item, index) => (
                  <option key={index} value={item.u_ID}>
                    {item.u_userName}
                  </option>
                ))}
              </select>
            </div>


            <div className=''>
              <div className='text-sm'>สินค้า</div>
              <div className='items-center grid grid-cols-2 gap-2'>
                <div className='md:text-xl'>🧈 เนยน้ำตาล</div>
                <div className='gap-2 flex'>
                  <button onClick={() => setButterQty(b => Math.max(0, b - 1))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400 hover:bg-red-200 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <span>{butterQty}</span>
                  <button onClick={() => setButterQty(b => b + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-400 hover:bg-green-200 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
                <div className='md:text-xl'>🐷 พริกเผาหมูหยอง</div>
                <div className='gap-2 flex'>
                  <button onClick={() => setPorkQty(p => Math.max(0, p - 1))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400 hover:bg-red-200 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <span>{porkQty}</span>
                  <button onClick={() => setPorkQty(p => p + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-400 hover:bg-green-200 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='text-2xl flex place-content-between p-2 mt-4 rounded-xl bg-green-900 text-white font-bold'>
              <div>รวม</div>
              <div>{totalPrice}</div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-900 text-white px-4 py-2 rounded-xl hover:bg-green-700"
              >
                เพิ่มออเดอร์
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
