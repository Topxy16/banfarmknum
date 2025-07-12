'use client'

type AlertModalProps = {
  message: string
  detail: string
  show: boolean
  onClose: () => void
}

export default function AlertModalProps({ message, detail, show, onClose }: AlertModalProps) {
  if (!show) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm text-center">
        <div className='flex items-center justify-center mb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-30">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div className="text-2xl font-bold mb-2">{message}</div>
        <p className="text-sm mb-4">{detail}</p>
      </div>
    </div>
  )
}
