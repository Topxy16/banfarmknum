'use client'

import { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const days = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  })

  return (
    <div className="p-4 rounded-xl bg-white shadow">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setSelectedDate(prev => new Date(prev.setMonth(prev.getMonth() - 1)))}>
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold">{format(selectedDate, 'MMMM yyyy')}</h2>
        <button onClick={() => setSelectedDate(prev => new Date(prev.setMonth(prev.getMonth() + 1)))}>
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day.toString()}
            className="text-center py-2 rounded hover:bg-blue-200 cursor-pointer"
            onClick={() => alert(`คุณคลิกวันที่: ${format(day, 'yyyy-MM-dd')}`)}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  )
}
