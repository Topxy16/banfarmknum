'use client'

import { useState } from 'react'

const expenseOptions = [
  { label: 'เนย', value: 'เนย' },
  { label: 'น้ำตาล', value: 'น้ำตาล' },
  { label: 'ค่าแรง', value: 'ค่าแรง' },
  { label: 'แก๊ส', value: 'แก๊ส' },
]

export default function ExpenseForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [inputs, setInputs] = useState([
    { type: '', amount: 0, price: 0 },
  ])

  const handleChange = (index: number, field: string, value: any) => {
    const updated = [...inputs]
    updated[index] = { ...updated[index], [field]: value }
    setInputs(updated)
  }

  const handleAddRow = () => {
    setInputs([...inputs, { type: '', amount: 0, price: 0 }])
  }

  const handleSubmit = () => {
    onSubmit(inputs)
  }

  return (
    <div className="space-y-4">
      {inputs.map((input, idx) => (
        <div key={idx} className="grid grid-cols-3 gap-2 items-center">
          <select
            className="bg-gray-200 rounded-xl p-2"
            value={input.type}
            onChange={(e) => handleChange(idx, 'type', e.target.value)}
          >
            <option value="">เลือกประเภท</option>
            {expenseOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="จำนวน"
            className="bg-gray-200 rounded-xl p-2"
            value={input.amount}
            onChange={(e) => handleChange(idx, 'amount', Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="ราคา/หน่วย"
            className="bg-gray-200 rounded-xl p-2"
            value={input.price}
            onChange={(e) => handleChange(idx, 'price', Number(e.target.value))}
          />
        </div>
      ))}

      <button
        onClick={handleAddRow}
        className="text-green-700 hover:text-green-900 text-sm"
      >
        ➕ เพิ่มรายการ
      </button>

      <div className="text-right">
        <button
          onClick={handleSubmit}
          className="bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-xl mt-4"
        >
          บันทึกทั้งหมด
        </button>
      </div>
    </div>
  )
}
