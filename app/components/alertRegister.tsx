'use client'
import React from 'react'

type Props = {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onSecondary?: () => void;
    confirmText?: string;
    secondaryText?: string;
}

export default function AlertModal({
    isOpen,
    title,
    message,
    onConfirm,
    onSecondary,
    confirmText = 'ตกลง',
    secondaryText = 'ยกเลิก'
}: Props) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
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
                        className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}
