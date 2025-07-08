'use client'
import React, { useState , useEffect} from 'react'

type UpdateOrderModalProps = {
  show: boolean
  onClose: () => void
  orderItemData: OrderItemType[]
  orderdateEnd: string
  
}
type OrderItemType = {
    i_ID: number
    i_Amount: number,
    p_ID: number,
    p_Name : string,
}
export default function UpdateOrderModal({orderdateEnd,orderItemData, show, onClose }: UpdateOrderModalProps) {
  if (!show) return null
  const [butterQty, setButterQty] = useState<{ [key: number]: number }>({}) 
  
  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className='bg-yellow-900 rounded-xl'>
        <div className="text-3xl font-bold text-white p-4">แก้ไขข้อมูลออเดอร์</div>
        <div className="bg-white shadow-xl w-90 p-6 md:w-120">

          <div className="space-y-3">
            <div>
              <div className='text-sm'>สินค้า</div>
              {orderItemData.map((item)=>(
                
              <div key={item.i_ID} className='items-center grid grid-cols-2 gap-2'>
                  <div  className='md:text-xl'>🧈 {item.p_Name}</div>
                <div className='gap-2 flex'>
                  <button  onClick={() => setButterQty(prev => ({ prev, [item.i_ID]: Math.max(0, (prev[item.i_ID] ?? item.i_Amount) - 1)}))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400 hover:bg-red-600 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  <span>{butterQty[item.i_ID] ?? item.i_Amount}</span>
                  <button onClick={() => setButterQty(prev => ({ prev, [item.i_ID]: Math.max(0, (prev[item.i_ID] ?? item.i_Amount) + 1)}))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-400 hover:bg-green-600 rounded-2xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              ))}
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
