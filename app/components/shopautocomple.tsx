// components/ShopAutocomplete.tsx
'use client'
import React, { useState, useEffect } from 'react'

type Shop = {
    id: number
    name: string
}

type Props = {
    onSelect: (shop: Shop) => void
}

export default function ShopAutocomplete({ onSelect }: Props) {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState<Shop[]>([])
    const [selected, setSelected] = useState<Shop | null>(null)

    useEffect(() => {
        const fetchShops = async () => {
            if (query.trim() === '') return setSuggestions([])
            const res = await fetch(`/api/shops?q=${query}`)
            const data = await res.json()
            setSuggestions(data)
        }

        const debounce = setTimeout(fetchShops, 300)
        return () => clearTimeout(debounce)
    }, [query])

    const handleSelect = (shop: Shop) => {
        setSelected(shop)
        setQuery(shop.name)
        setSuggestions([])
        onSelect(shop)
    }

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    setSelected(null)
                }}
                className="w-full p-2 border rounded"
                placeholder="พิมพ์ชื่อร้านค้า..."
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border w-full rounded shadow max-h-40 overflow-auto">
                    {suggestions.map((shop) => (
                        <li
                            key={shop.id}
                            onClick={() => handleSelect(shop)}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {shop.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
