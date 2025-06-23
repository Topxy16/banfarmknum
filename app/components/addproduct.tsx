'use client'

import React, { useState } from 'react'

type AddProductModalProps = {
  show: boolean
  onClose: () => void
  Category: CategoryType[];
}
type CategoryType = {
  c_ID : number,
  c_Name : string
}
export default function AddProductModal({ show, onClose , Category }: AddProductModalProps ) {
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

    const formData = new FormData()
    formData.append('p_Name', p_Name)
    formData.append('p_Detail', p_Detail)
    formData.append('p_Price', p_Price)
    formData.append('p_Amount', p_Amount)
    if (image) formData.append('p_Image', image)

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
          <select name=""  value={c_ID} id="" onChange={(e )=> (setCategory(Number(e.target.value)))}>  
            <option value={Number("0")}> เลือกหมวดหมู่ </option>
            {Category.map( (item , index) => (
              
            <option key ={index} value={item.c_ID}>   
                  {item.c_Name}
            </option>
            ) )}
          </select>
          <input
            type="number"
            placeholder="จำนวน"
            className="w-full border-b-3 border-green-800 p-2 rounded"
            value={p_Amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
            <li className="relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none" id="listbox-option-0" role="option">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal">Wade Cooper</span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
              </span>
            </li>
          </ul>
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
