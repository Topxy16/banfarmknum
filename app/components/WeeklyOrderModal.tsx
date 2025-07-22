'use client'

type Order = {
  o_ID: number
  o_endDate: string
  p_Name: string
  quantity: number
  shop: string
}

export default function WeeklyOrderModal({
  show,
  onClose,
  orders,
  day,
}: {
  show: boolean
  onClose: () => void
  orders: Order[]
  day: string
}) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-[90vw] max-w-md p-4">
        <h2 className="text-xl font-bold mb-2">📅 ออเดอร์วัน{day}</h2>
        {orders.length === 0 ? (
          <div className="text-gray-400">ไม่มีออเดอร์</div>
        ) : (
          <div className="space-y-3 max-h-[60vh] overflow-y-auto">
            {orders.map((order) => (
              <div
                key={order.o_ID}
                className="bg-gray-100 p-3 rounded-xl text-black shadow"
              >
                <div>🧾 เลขออเดอร์: {order.o_ID}</div>
                <div>📦 สินค้า: {order.p_Name}</div>
                <div>📊 จำนวน: {order.quantity}</div>
                <div>🏪 ร้าน: {order.shop}</div>
                <div>📅 ส่งวันที่: {new Date(order.o_endDate).toLocaleDateString('th-TH')}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  )
}
