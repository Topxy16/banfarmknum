'use client'

type TokenModalProps = {
  message: string
  detail: string
  show: boolean
  onClose: () => void
}

export default function TokenModal({ message, detail, show, onClose }: TokenModalProps) {
  if (!show) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm text-center">
        <div className='flex items-center justify-center mb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-30">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-red-600 mb-2">{message}</h1>
        <p className="text-sm text-gray-700 mb-4">{detail}</p>
      </div>
    </div>
  )
}
