'use client'

import React, { useState } from 'react'

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
      const res = await fetch('https://bnvw3t5t-8080.asse.devtunnels.ms/api/products/addProduct', {
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
      onClose()
    } catch (err) {
      console.error('❌ เพิ่มสินค้าไม่สำเร็จ:', err)
    }
  }
  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-90 max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">เพิ่มสินค้า</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="ชื่อสินค้า"
            className="w-full border-b-3 border-amber-900 p-2 rounded"
            value={p_Name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="รายละเอียด"
            className="w-full border-b-3 border-amber-900 p-2 rounded"
            value={p_Detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <input
            type="number"
            placeholder="ราคา (บาท)"
            className="w-full border-b-3 border-amber-900 p-2 rounded"
            value={p_Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select className='w-full mt-2 rounded-lg p-1.5 bg-gray-200' name="" value={c_ID} id="" onChange={(e) => (setCategory(Number(e.target.value)))}>
            <option value={Number("0")}> เลือกหมวดหมู่ </option>
            {category.map((item, index) => (

              <option key={index} value={item.c_ID}>
                {item.c_Name}
              </option>
            ))}
          </select>

          {/* <div className='mt-1'>อัปโหลดรูปภาพ</div>
          <input type="file" accept="image/*" onChange={handleImage} className="w-50 bg-gray-200 p-1.5 rounded-lg" />


          {preview && (
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded" />
          )} */}
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
              เพิ่มสินค้า
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
