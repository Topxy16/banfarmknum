'use client'

import { useState } from 'react'
import WeeklyOrderModal from '../components/WeeklyOrderModal'

const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์']

type Order = {
  o_ID: number
  o_endDate: string // ISO string
  p_Name: string
  quantity: number
  shop: string
}

type Props = {
  orders: Order[]
}

export default function WeeklyOrderWidget({ orders }: Props) {
  const todayIndex = new Date().getDay()
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const groupedByDay: Record<number, Order[]> = {}
  orders.forEach(order => {
    const d = new Date(order.o_endDate).getDay()
    if (!groupedByDay[d]) groupedByDay[d] = []
    groupedByDay[d].push(order)
  })

  return (
    <>
      <div className="grid grid-cols-7 gap-2 text-black bg-white rounded-xl text-sm md:text-2xl shadow-md p-2">
        {dayNames.map((day, idx) => (
          <div
            key={idx}
            onClick={() => groupedByDay[idx] && setSelectedDay(idx)}
            className={`rounded-lg p-2 cursor-pointer ${
              idx === todayIndex ? 'bg-zinc-800 text-white' : 'bg-white'
            }`}
          >
            <div className="font-semibold">{day}</div>
            {groupedByDay[idx]?.length > 0 && (
              <div className="text-sm pl-2 mt-1 space-y-1">
                <div className="">{groupedByDay[idx][0].p_Name}</div>
                <div className="text-lg">{groupedByDay[idx][0].quantity}</div>
                <div className="">{groupedByDay[idx][0].shop}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal แสดงออเดอร์ของวันนั้น */}
      <WeeklyOrderModal
        show={selectedDay !== null}
        onClose={() => setSelectedDay(null)}
        orders={selectedDay !== null ? groupedByDay[selectedDay] ?? [] : []}
        day={selectedDay !== null ? dayNames[selectedDay] : ''}
      />
    </>
  )
}
