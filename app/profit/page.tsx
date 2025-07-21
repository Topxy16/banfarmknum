'use client'

import { useState } from 'react'
import AddExpenseModal from '../components/AddExpenseModal'
import ExpenseForm from '../components/ExpenseForm'

export default function FinancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState('today')
  const [showModal, setShowModal] = useState(false)

  const handleAddExpense = (data: any) => {
    console.log('📦 ส่งข้อมูลทั้งหมด:', data)
    setShowModal(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📊 รายงานการเงิน</h1>

      {/* ตัวเลือกช่วงเวลา */}
      <div className="flex gap-2 mb-4">
        {['today', 'week', 'month'].map((p) => (
          <button
            key={p}
            onClick={() => setSelectedPeriod(p)}
            className={`px-4 py-2 rounded-xl font-semibold ${
              selectedPeriod === p
                ? 'bg-green-900 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {p === 'today' ? 'วันนี้' : p === 'week' ? 'สัปดาห์นี้' : 'เดือนนี้'}
          </button>
        ))}
      </div>

      {/* Card แสดงผลรวม */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-100 rounded-xl p-4">
          <p className="text-gray-500">รายรับรวม</p>
          <p className="text-2xl font-bold text-blue-700">12,000 บาท</p>
        </div>
        <div className="bg-red-100 rounded-xl p-4">
          <p className="text-gray-500">รายจ่ายรวม</p>
          <p className="text-2xl font-bold text-red-600">5,300 บาท</p>
        </div>
        <div className="bg-green-100 rounded-xl p-4">
          <p className="text-gray-500">กำไรสุทธิ</p>
          <p className="text-2xl font-bold text-green-600">6,700 บาท</p>
        </div>
      </div>

      {/* ปุ่มเพิ่มรายการ */}
      <div className="flex justify-end mb-2">
        <button
          className="bg-green-900 text-white px-4 py-2 rounded-xl hover:bg-green-700"
          onClick={() => setShowModal(true)}
        >
          ➕ เพิ่มรายจ่าย
        </button>
      </div>

      {/* ตารางรายจ่าย */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-2">ประเภท</th>
              <th className="p-2">จำนวน</th>
              <th className="p-2">ราคาต่อหน่วย</th>
              <th className="p-2 text-right">รวม</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">แก๊ส</td>
              <td className="p-2">1 ถัง</td>
              <td className="p-2">300</td>
              <td className="p-2 text-right">300 บาท</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">ค่าแรง</td>
              <td className="p-2">2 วัน</td>
              <td className="p-2">400</td>
              <td className="p-2 text-right">800 บาท</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AddExpenseModal show={showModal} onClose={() => setShowModal(false)}>
        <ExpenseForm onSubmit={handleAddExpense} />
      </AddExpenseModal>
    </div>
  )
}
