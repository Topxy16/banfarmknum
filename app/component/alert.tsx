'use client'

import { useRouter } from 'next/navigation'


type TokenModalProps = {
    message: string
    detail: string
    show: boolean
    onClose: () => void
}

export default function TokenModal({ message, detail, show, onClose }: TokenModalProps) {
    const router = useRouter()

    if (!show) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm text-center">
                <h2 className="text-xl font-bold text-red-600 mb-2">{message}</h2>
                <p className="text-sm text-gray-700 mb-4">{detail}</p>
                {/* <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            ปิด
          </button>
          <button
            onClick={() => router.push('/login')}
            className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
          >
            ไปหน้า Login
          </button>
        </div> */}
            </div>
        </div>
    )
}
