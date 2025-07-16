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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <div className="text-3xl font-bold mb-2">{message}</div>
        <p className="text-sm mb-4">{detail}</p>
      </div>
    </div>
  )
}
