'use client'
import { useRouter } from 'next/navigation'
import AlertPupdate from '../components/alertallaround'
import React, { useState } from 'react'

type UpdateProductModalProps = {
  show: boolean
  onClose: () => void
  propsCategory: CategoryType[]
  productUpdate: ProductType
}
type CategoryType = {
  c_ID: number,
  c_Name: string
}
type ProductType = {
  p_ID: number,
  p_Name: string,
  p_Detail: string,
  c_ID: number,
  p_Price: number,
  p_Amount: number,
  c_Name: string,
  p_Status: number,
  p_Img: string,
}
export default function UpdateProductModal({ show, propsCategory, productUpdate, onClose }: UpdateProductModalProps) {
  const router = useRouter();
  const [showalert, setShowalert] = useState(false)
  const [p_Name, setName] = useState(productUpdate.p_Name)
  const [p_Detail, setDetail] = useState(productUpdate.p_Detail)
  const [p_Price, setPrice] = useState(productUpdate.p_Price)
  const [p_Amount, setAmount] = useState('')
  const [c_ID, setCategory] = useState(productUpdate.c_ID)
  // const [image, setImage] = useState<File | null>(null)
  // const [preview, setPreview] = useState<string | null>(null)
  //console.log(productUpdate)

  if (!show) return null
  // const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     setImage(file)
  //     setPreview(URL.createObjectURL(file))
  //   }
  // }

  const handleSubmit = async () => {
    const token = localStorage.getItem('token')
    // if (image) formData.append('p_Image', image)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/updateProduct`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          'p_ID': productUpdate.p_ID,
          'p_Name': p_Name,
          'p_Detail': p_Detail,
          'p_Price': p_Price,
          'p_Amount': p_Amount,
          'c_ID': c_ID
        }),
      })
      const resData = await res.json()
      if (resData.status === 1) {
        console.log('✅ แก้ไขข้อมูลสินค้าแล้ว:')
      } else if (resData.status === 0) {
        console.error('❌ แก้ไขข้อมูลสินค้าไม่สำเร็จ:')
      }
      onClose()
    } catch (err) {
      console.error('❌ แก้ไขข้อมูลสินค้าไม่สำเร็จ:', err)
    }
  }
  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-90 max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">แก้ไขข้อมูลสินค้า</h2>
        <div className="space-y-3">
          <div>ชื่อสินค้า</div>
          <input
            type="text"
            placeholder="ชื่อสินค้า"
            className="w-full border-b-3 border-amber-900 p-2 rounded"
            value={p_Name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>ประเภท</div>
          <select className='w-full mt-2 rounded-lg p-1.5 bg-gray-200' name="" value={c_ID} id="" onChange={(e) => (setCategory(Number(e.target.value)))}>
            <option value={Number("0")}> เลือกหมวดหมู่ </option>
            {propsCategory.map((item, index) => (

              <option key={index} value={item.c_ID}>
                {item.c_Name}
              </option>
            ))}
          </select>
          <div>รายละเอียด</div>
          <textarea
            placeholder="รายละเอียด"
            className="w-full border-b-3 border-amber-900 p-2 rounded"
            value={p_Detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <div>ราคา</div>
          <input
            type="number"
            placeholder="ราคา (บาท)"
            className="w-full border-b-3 border-amber-900 p-2 rounded"
            value={p_Price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleSubmit}
              className="bg-yellow-900 text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
              แก้ไขข้อมูลสินค้า
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
