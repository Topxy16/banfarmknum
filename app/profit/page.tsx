// app/dashboard/profit/page.tsx
"use client"

import React from "react"

const productionRounds = [
  {
    id: 1,
    date: "10 ก.ค. 2567",
    unitsSold: 80,
    pricePerUnit: 100,
    costs: [
      { name: "เนย", amount: 2, unit: "ถุง", price: 65 },
      { name: "น้ำตาล", amount: 2, unit: "ถุง", price: 26 },
      { name: "หมูหยอง", amount: 20, unit: "ถุง", price: 120 },
      { name: "แพ็คเกจ", amount: 80, unit: "ซอง", price: 0.8 },
      { name: "ค่าแรง", amount: 1, unit: "วัน", price: 300 },
      { name: "แก๊ส", amount: 1, unit: "รอบ", price: 50 },
    ],
  },
]

export default function ProfitPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📊 สรุปกำไร/ขาดทุนต่อรอบ</h1>

      {productionRounds.map((round) => {
        const totalRevenue = round.unitsSold * round.pricePerUnit
        const totalCost = round.costs.reduce(
          (sum, c) => sum + c.amount * c.price,
          0
        )
        const profit = totalRevenue - totalCost
        const profitPercent = (profit / totalRevenue) * 100

        return (
          <div
            key={round.id}
            className="bg-white rounded-2xl shadow p-6 mb-8 space-y-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">รอบวันที่ {round.date}</h2>
              <span className="text-sm text-gray-500">
                ขาย {round.unitsSold} ชุด × {round.pricePerUnit} บาท
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-100 rounded-xl p-4">
                <p className="text-gray-500">รายรับรวม</p>
                <p className="text-xl font-bold text-blue-700">
                  {totalRevenue.toLocaleString()} บาท
                </p>
              </div>
              <div className="bg-red-100 rounded-xl p-4">
                <p className="text-gray-500">รายจ่ายรวม</p>
                <p className="text-xl font-bold text-red-600">
                  {totalCost.toLocaleString()} บาท
                </p>
              </div>
              <div className="bg-green-100 rounded-xl p-4">
                <p className="text-gray-500">กำไรสุทธิ</p>
                <p className="text-xl font-bold text-green-600">
                  {profit.toLocaleString()} บาท
                </p>
              </div>
              <div className="bg-yellow-100 rounded-xl p-4">
                <p className="text-gray-500">% กำไร</p>
                <p className="text-xl font-bold text-yellow-600">
                  {profitPercent.toFixed(2)}%
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-700 mt-4 mb-2">
                รายการต้นทุน:
              </p>
              <table className="w-full text-sm text-left border rounded-xl overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">วัตถุดิบ</th>
                    <th className="p-2">จำนวน</th>
                    <th className="p-2">ราคาต่อหน่วย</th>
                    <th className="p-2 text-right">รวม</th>
                  </tr>
                </thead>
                <tbody>
                  {round.costs.map((item, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">
                        {item.amount} {item.unit}
                      </td>
                      <td className="p-2">{item.price} บาท</td>
                      <td className="p-2 text-right">
                        {(item.amount * item.price).toLocaleString()} บาท
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}
