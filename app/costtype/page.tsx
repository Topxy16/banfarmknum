'use client'

import { useState } from 'react'
import Image from 'next/image'
// import defaultIcon from '@/public/default-icon.png'

const mockTypes = [
    {
        id: 1,
        name: 'เนย',
        category: 'วัตถุดิบ',
        // image: defaultIcon,
    },
    {
        id: 2,
        name: 'ค่าแรง',
        category: 'แรงงาน',
        // image: defaultIcon,
    },
]

export default function CostType() {
    const [types, setTypes] = useState(mockTypes)
    const [search, setSearch] = useState('')
    const [selectedType, setSelectedType] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const filtered = types.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="w-full mx-auto p-4">
            <div className='mb-2'>ประเภทรายการต้นทุน</div>
            <div className="flex justify-between items-center mb-4">
                <div className="bg-zinc-400 flex py-1.5 rounded-2xl place-items-center">
                    <input
                        type="text"
                        placeholder="ค้นหาประเภท..."
                        className="text-sm rounded-2xl bg-white p-2 mx-2 max-w-120"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />
                </div>
                <button
                    className="bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-xl ml-2"
                    onClick={() => {
                        setSelectedType(null)
                        setShowModal(true)
                    }}
                >
                    เพิ่มประเภท
                </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl text-black p-4 shadow-xl h-40"
                    >
                        <div className="flex">
                            <Image
                                src={item.image}
                                alt=""
                                className="rounded-xl shadow-lg w-20 h-20 object-cover"
                            />
                            <div className="p-5 flex-1">
                                <div className='font-semibold text-xl'>{item.name}</div>
                                <div className='text-sm text-gray-600'>ประเภท : {item.category}</div>
                                <div className='mt-4 flex justify-end gap-2 text-2xl'>
                                    <button className="bg-yellow-900 text-white rounded-xl p-2 hover:bg-yellow-700" id='update'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                        </svg>

                                    </button>
                                    <button className="bg-red-900 text-white rounded-xl p-2 hover:bg-red-700" id='del'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal แก้ไข/เพิ่ม */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-[90vw] max-w-md">
                        <div className="text-xl font-bold mb-4">
                            {selectedType ? 'แก้ไขประเภท' : 'เพิ่มประเภท'}
                        </div>
                        <input
                            type="text"
                            placeholder="ชื่อ"
                            defaultValue={selectedType?.name || ''}
                            className="w-full bg-gray-200 px-4 py-2 rounded-xl mb-2"
                        />
                        <input
                            type="text"
                            placeholder="หมวดหมู่"
                            defaultValue={selectedType?.category || ''}
                            className="w-full bg-gray-200 px-4 py-2 rounded-xl mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowModal(false)} className="bg-gray-200 px-4 py-2 rounded-xl">
                                ยกเลิก
                            </button>
                            <button className="bg-green-900 text-white px-4 py-2 rounded-xl">
                                บันทึก
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal ลบ */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-[90vw] max-w-sm">
                        <div className="text-xl font-bold mb-4">ยืนยันการลบ</div>
                        <p className="mb-4">คุณต้องการลบประเภท "{selectedType?.name}" หรือไม่?</p>
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowDeleteModal(false)} className="bg-gray-200 px-4 py-2 rounded-xl">
                                ยกเลิก
                            </button>
                            <button className="bg-red-900 text-white px-4 py-2 rounded-xl">
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
