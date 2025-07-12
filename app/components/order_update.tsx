'use client'
import React, { useState, useEffect } from 'react'
import Alert from '../components/alertSuccess'
type UpdateOrderModalProps = {
  show: boolean
  onClose: () => void
  orderItemData: OrderItemType[]
  orderdateEnd: string
  o_ID: number

}
type OrderItemType = {
  i_ID: number
  i_Amount: number,
  p_ID: number,
  p_Name: string,
}
export default function UpdateOrderModal({ orderdateEnd, orderItemData, o_ID, show, onClose }: UpdateOrderModalProps) {
  if (!show) return null
  const [setalert, setAlert] = useState(false)
  const [itemQty, setItemQty] = useState<{ [i_ID: number]: number }>({});
  const [selectedDateTime, setSelectedDateTime] = useState<string>(
    orderdateEnd ? orderdateEnd : ''
  )

  const HandleUpdate = async () => {
    const token = localStorage.getItem('token');
    const cart = orderItemData.map((item) => ({
      i_ID: item.i_ID,
      i_Amount: itemQty[item.i_ID] ?? item.i_Amount
    }));
    const payload = {
      o_ID: o_ID,
      o_endDate: new Date(selectedDateTime).toISOString(), // แปลงเวลาให้เป็น ISO
      cart: cart
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/updateOrder`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const resData = await res.json()
    if (resData.status === 1) {
      setAlert(true)
      setTimeout(() => {
        onClose()
        setAlert(false)
      }, 2000);
    } else if (resData.status === 0) {
      console.log('ไม่ได้')
    }
    console.log(payload)
  }
  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <Alert message='เพิ่มออเดอร์สำเร็จ' detail='' show={setalert} onClose={() => { setAlert }} />
      <div className='bg-yellow-900 rounded-xl'>
        <div className="text-3xl font-bold text-white p-4">แก้ไขข้อมูลออเดอร์</div>
        <div className="bg-white shadow-xl w-90 p-6 md:w-120">

          <div className="space-y-3">
            <div>
              <div className='text-sm'>สินค้า</div>
              {orderItemData.map((item) => (

                <div key={item.i_ID} className='items-center flex'>
                  <div className='md:text-xl w-full'>🧈 {item.p_Name}</div>
                  <div className='gap-2 flex'>
                    <button onClick={() => setItemQty(prev => ({ ...prev, [item.i_ID]: Math.max(0, (prev[item.i_ID] ?? item.i_Amount) - 1) }))}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400 hover:bg-red-200 rounded-2xl">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </button>
                    <span>{itemQty[item.i_ID] ?? item.i_Amount}</span>
                    <button onClick={() => setItemQty(prev => ({ ...prev, [item.i_ID]: Math.max(0, (prev[item.i_ID] ?? item.i_Amount) + 1) }))}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-400 hover:bg-green-200 rounded-2xl">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-sm'>วันที่ต้องส่ง</div>
            <input
              className='bg-gray-200 hover:bg-gray-300 rounded-xl p-2 w-full'
              type="datetime-local"
              value={selectedDateTime}
              onChange={(e) => setSelectedDateTime(e.target.value)}
            />
            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
              >
                ยกเลิก
              </button>
              <button onClick={() => { HandleUpdate() }}
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
