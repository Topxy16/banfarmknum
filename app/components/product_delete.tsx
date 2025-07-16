'use client'

type DeleteProductModalProps = {
  show: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onSecondary?: () => void;
  confirmText?: string;
  secondaryText?: string;
}

export default function ProductDeleteModal({
  show,
  title,
  message,
  onConfirm,
  onSecondary,
  confirmText = 'ตกลง',
  secondaryText = 'ยกเลิก'
}: DeleteProductModalProps) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-red-900 rounded-xl">
        <div className="text-3xl font-bold text-white p-4">{title}</div>
        <div className="bg-white shadow-xl p-6 w-90 max-w-md">
          <p className="text-gray-700 mb-4">{message}</p>
          <div className="flex justify-end gap-2">
            {onSecondary && (
              <button
                onClick={onSecondary}
                className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
              >
                {secondaryText}
              </button>
            )}
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-xl bg-red-900 text-white hover:bg-red-700"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
