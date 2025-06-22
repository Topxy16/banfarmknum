'use client'
export default function OrderTable() {
    return (
        <div>
            <div className="hidden md:block">
                <div className="relative overflow-x-auto shadow-md rounded-xl">
                    <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-lg text-white uppercase bg-zinc-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">
                                    วันที่สั่ง
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    เลขออร์เดอร์
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    สินค้า
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    จำนวน
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    ร้าน
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    วันที่ต้องส่ง
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    สถานะออเดอร์
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    เครื่องมือ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white text-black">
                                <th scope="row" className="px-6 py-4">
                                    05/03/2568
                                </th>
                                <td className="px-6 py-4">
                                    #0001
                                </td>
                                <td className="px-6 py-4">
                                    เนยน้ำตาล
                                </td>
                                <td className="px-6 py-4">
                                    10
                                </td>
                                <td className="px-6 py-4">
                                    ร้านลุงชัย
                                </td>
                                <td className="px-6 py-4">
                                    07/03/2568
                                </td>
                                <td className="px-6 py-4">
                                    ส่งแล้ว
                                </td>
                                <td className="px-6 py-4 flex">
                                    <div className="bg-zinc-500 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-red-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white text-black">
                                <th scope="row" className="px-6 py-4">
                                    05/03/2568
                                </th>
                                <td className="px-6 py-4">
                                    #0001
                                </td>
                                <td className="px-6 py-4">
                                    เนยน้ำตาล
                                </td>
                                <td className="px-6 py-4">
                                    10
                                </td>
                                <td className="px-6 py-4">
                                    ร้านลุงชัย
                                </td>
                                <td className="px-6 py-4">
                                    07/03/2568
                                </td>
                                <td className="px-6 py-4">
                                    ส่งแล้ว
                                </td>
                                <td className="px-6 py-4 flex">
                                    <div className="bg-zinc-500 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-red-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white text-black">
                                <th scope="row" className="px-6 py-4">
                                    05/03/2568
                                </th>
                                <td className="px-6 py-4">
                                    #0001
                                </td>
                                <td className="px-6 py-4">
                                    เนยน้ำตาล
                                </td>
                                <td className="px-6 py-4">
                                    10
                                </td>
                                <td className="px-6 py-4">
                                    ร้านลุงชัย
                                </td>
                                <td className="px-6 py-4">
                                    07/03/2568
                                </td>
                                <td className="px-6 py-4">
                                    ส่งแล้ว
                                </td>
                                <td className="px-6 py-4 flex">
                                    <div className="bg-zinc-500 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-red-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white text-black">
                                <th scope="row" className="px-6 py-4">
                                    05/03/2568
                                </th>
                                <td className="px-6 py-4">
                                    #0001
                                </td>
                                <td className="px-6 py-4">
                                    เนยน้ำตาล
                                </td>
                                <td className="px-6 py-4">
                                    10
                                </td>
                                <td className="px-6 py-4">
                                    ร้านลุงชัย
                                </td>
                                <td className="px-6 py-4">
                                    07/03/2568
                                </td>
                                <td className="px-6 py-4">
                                    ส่งแล้ว
                                </td>
                                <td className="px-6 py-4 flex">
                                    <div className="bg-zinc-500 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-red-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white text-black">
                                <th scope="row" className="px-6 py-4">
                                    05/03/2568
                                </th>
                                <td className="px-6 py-4">
                                    #0001
                                </td>
                                <td className="px-6 py-4">
                                    เนยน้ำตาล
                                </td>
                                <td className="px-6 py-4">
                                    10
                                </td>
                                <td className="px-6 py-4">
                                    ร้านลุงชัย
                                </td>
                                <td className="px-6 py-4">
                                    07/03/2568
                                </td>
                                <td className="px-6 py-4">
                                    ส่งแล้ว
                                </td>
                                <td className="px-6 py-4 flex">
                                    <div className="bg-zinc-500 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-red-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-900 text-white rounded-lg ml-1 px-2 h-10 pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}