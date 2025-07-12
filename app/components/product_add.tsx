'use client'

import React, { useState } from 'react'
import Alert from '../components/alertSuccess'

type AddProductModalProps = {
  show: boolean
  onClose: () => void
  category: CategoryType[];
}
type CategoryType = {
  c_ID: number,
  c_Name: string
}
export default function AddProductModal({ show, onClose, category }: AddProductModalProps) {
  const [setalert, setAlert] = useState(false)
  const [p_Name, setName] = useState('')
  const [p_Detail, setDetail] = useState('')
  const [p_Price, setPrice] = useState('')
  const [p_Amount, setAmount] = useState('')
  const [c_ID, setCategory] = useState(0)
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  if (!show) return null

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem('token')

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/addProduct`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          'p_Name': p_Name,
          'p_Detail': p_Detail,
          'p_Price': p_Price,
          'p_Amount': p_Amount,
          'c_ID': c_ID
        }),
      })
      const data = await res.json()
      console.log('✅ เพิ่มสินค้าแล้ว:', data)
      setAlert(true)
      setTimeout(() => {
        onClose()
        setAlert(false)
      }, 2000);
    } catch (err) {
      console.error('❌ เพิ่มสินค้าไม่สำเร็จ:', err)
    }
  }
  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <Alert message='เพิ่มสินค้าสำเร็จ' detail='' show={setalert} onClose={() => { setAlert }} />
      <div className='bg-green-900 rounded-xl'>
        <div className="text-3xl font-bold text-white p-4">เพิ่มสินค้า</div>
        <div className="bg-white shadow-xl w-90 max-w-md p-6">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="ชื่อสินค้า"
              className="w-full bg-gray-200 hover:bg-gray-300 rounded-xl p-2"
              value={p_Name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="รายละเอียด"
              className="w-full bg-gray-200 hover:bg-gray-300 rounded-xl p-2"
              value={p_Detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <select className='w-full rounded-lg p-1.5 bg-gray-200 hover:bg-gray-300' name="" value={c_ID} id="" onChange={(e) => (setCategory(Number(e.target.value)))}>
              <option value={Number("0")}> เลือกหมวดหมู่ </option>
              {category.map((item, index) => (

                <option key={index} value={item.c_ID}>
                  {item.c_Name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="ราคา (บาท)"
              className="w-full bg-gray-200 hover:bg-gray-300 rounded-xl p-2"
              value={p_Price}
              onChange={(e) => setPrice(e.target.value)}
            />


            {/* <div className='mt-1'>อัปโหลดรูปภาพ</div>
          <input type="file" accept="image/*" onChange={handleImage} className="w-50 bg-gray-200 p-1.5 rounded-lg" />


          {preview && (
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded" />
          )} */}
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
                เพิ่มสินค้า
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
