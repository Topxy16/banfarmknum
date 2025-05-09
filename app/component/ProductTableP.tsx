import Image from 'next/image'
import neyor from '../../public/neyor.png'
import hamu from '../../public/hamuneyor.png'
export default function ProductTableP() {
    return (
        <div>
            <div className="phone md:hidden">
                <div className="bg-white rounded-xl text-black text-xl mt-2 p-4 w-100 shadow-xl">
                    <div className='flex'>
                        <div className='w-50'>
                            <Image
                                src={neyor}
                                alt="สถิติยอดขาย"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="p-5">ขนมปังกรอบเนยน้ำตาล เนยหอมกรอบนาน</div>
                    </div>

                    <div className="flex text-3xl place-content-end">
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
                    </div>
                </div>

                <div className="bg-white rounded-xl text-black text-xl mt-2 p-4 w-100 shadow-xl">
                    <div className='flex'>
                        <div className='w-50'>
                            <Image
                                src={hamu}
                                alt="สถิติยอดขาย"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="p-5">ขนมปังกรอบพริกเผาหมูหยอง เครื่องแน่น</div>
                    </div>

                    <div className="flex text-3xl place-content-end">
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
                    </div>
                </div>

                <div className="bg-gray-300 rounded-2xl p-2 mt-2 flex place-content-center shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

            </div>
        </div>
    )
}