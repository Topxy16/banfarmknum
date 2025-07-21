'use client'

import React from 'react'

export default function AddExpenseModal({
  show,
  onClose,
  children,
}: {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">เพิ่มรายการรายจ่าย</h2>
        {children}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="text-sm bg-gray-200 hover:bg-gray-300 rounded-xl px-4 py-2"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  )
}
