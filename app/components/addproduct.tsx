'use client'

import React, { useState } from 'react'

type AddProductModalProps = {
  show: boolean
  onClose: () => void
}

export default function AddProductModal({ show, onClose }: AddProductModalProps) {
  const [p_Name, setName] = useState('')
  const [p_Detail, setDetail] = useState('')
  const [p_Price, setPrice] = useState('')
  const [p_Amount, setAmount] = useState('')
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

    const formData = new FormData()
    formData.append('p_Name', p_Name)
    formData.append('p_Detail', p_Detail)
    formData.append('p_Price', p_Price)
    formData.append('p_Amount', p_Amount)
    if (image) formData.append('p_Image', image)

    try {
      const res = await fetch('https://your-api.com/api/products/add', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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
        <h2 className="text-2xl font-bold text-center mb-4 text-black">เพิ่มสินค้า</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="ชื่อสินค้า"
            className="w-full border-b-3 border-green-800 p-2 rounded"
            value={p_Name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="รายละเอียด"
            className="w-full border-b-3 border-green-800 p-2 rounded"
            value={p_Detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <input
            type="number"
            placeholder="ราคา (บาท)"
            className="w-full border-b-3 border-green-800 p-2 rounded"
            value={p_Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="จำนวน"
            className="w-full border-b-3 border-green-800 p-2 rounded"
            value={p_Amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input type="file" accept="image/*" onChange={handleImage} className="w-full" />
          {preview && (
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded" />
          )}

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
