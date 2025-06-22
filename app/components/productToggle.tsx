'use client'

import { useState } from 'react'

type ProductToggleProps = {
    initialStatus?: boolean
    onToggle?: (newStatus: boolean) => void
}

export default function ProductToggle({ initialStatus = true, onToggle }: ProductToggleProps) {
    const [isActive, setIsActive] = useState(initialStatus)

    const handleToggle = () => {
        const newStatus = !isActive
        setIsActive(newStatus)
        if (onToggle) onToggle(newStatus)
    }

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handleToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${isActive ? 'bg-green-500' : 'bg-gray-300'
                    }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${isActive ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </button>
        </div>
    )
}
