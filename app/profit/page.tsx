'use client'

import { useState } from 'react'
import AddExpenseModal from '../components/AddExpenseModal'
import ExpenseForm from '../components/ExpenseForm'

export default function FinancePage() {

  // const [searchTerm, setSearchTerm] = useState('')

  // const filteredOrders = profit.filter((item) =>
  //   item.u_userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   item.de_tel.toString().includes(searchTerm) ||
  //   item.o_ID.toString().includes(searchTerm)
  // )

  const [selectedPeriod, setSelectedPeriod] = useState('today')
  const [showModal, setShowModal] = useState(false)

  const handleAddExpense = (data: any) => {
    console.log('📦 ส่งข้อมูลทั้งหมด:', data)
    setShowModal(false)
  }

  return (
    <div className="w-full mx-auto p-4">
      <div className='bg-white rounded-xl p-4'>
        {/* ตัวเลือกช่วงเวลา */}
        <div className="flex gap-2 mb-4">
          {['today', 'week', 'month'].map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPeriod(p)}
              className={`px-4 py-2 rounded-xl font-semibold ${selectedPeriod === p
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
          <input
            type="text"
            placeholder="ค้นหาเลขออเดอร์ / ชื่อ / เบอร์"
            className="bg-gray-200 p-2 rounded-xl w-full md:text-sm"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-green-900 text-white px-4 py-2 min-w-30 ml-2 rounded-xl hover:bg-green-700"
            onClick={() => setShowModal(true)}
          >
            เพิ่มรายการ
          </button>
        </div>
      </div>
      {/* ตารางรายจ่าย */}
      <div className="relative overflow-x-auto shadow-xl rounded-xl mt-4">
        <table className="w-full text-lg text-left text-gray-500">
          <thead className="text-lg text-white uppercase bg-zinc-100">
            <tr>
              <th className="px-6 py-3">ประเภท</th>
              <th className="px-6 py-3">จำนวน</th>
              <th className="px-6 py-3">ราคาต่อหน่วย</th>
              <th className="px-6 py-3 text-right">รวม</th>
              <th className="px-6 py-3 text-right">เครื่องมือ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-black border-t">
              <td className="px-6 py-4">แก๊ส</td>
              <td className="px-6 py-4">1 ถัง</td>
              <td className="px-6 py-4">300</td>
              <td className="px-6 py-4 text-right">300 บาท</td>
              <td className="px-6 py-4 text-right flex justify-end gap-1">
                <button className="bg-yellow-900 hover:bg-yellow-600 text-white rounded-lg px-2 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
                  </svg>
                </button>
                <button className="bg-red-900 hover:bg-red-600 text-white rounded-lg px-2 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </td>
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
