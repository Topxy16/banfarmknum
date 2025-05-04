export default function dashboard() {
    return (
        <div>
            <div className="phone font-bold md:hidden">
                <div className="bg-white shadow-2xl h-45 text-center place-content-center">
                    <div className="text-4xl">2000</div>
                    <div className="text-2xl">ยอดขายรายสัปดาห์</div>
                </div>
                <div className="bg-zinc-800 shadow-2xl h-25 rounded-2xl p-2 m-4 text-white">
                    <div className="text-3xl p-2">ออเดอร์วันนี้</div>
                    <div className="text-2xl pl-5">เนยน้ำตาล 10 ร้านโด่ง...</div>
                </div>
                <div className="grid grid-cols-2 m-4 gap-2">
                    <div className="bg-zinc-400 h-40 rounded-2xl p-2 shadow-2xl">
                        <div className="text-2xl p-2">รายเดือน</div>
                        <div className="text-4xl text-center pt-4">3000</div>
                    </div>
                    <div className="bg-white h-40 rounded-2xl p-2 shadow-2xl">
                        <div className="text-2xl p-2">ร้านค้า</div>
                        <div className="place-item-between flex">
                            <div className="text-xl pl-4">1.ร้านโด่ง</div>
                            <div className="text-xl pl-4">10</div>
                        </div>
                        <div className="place-item-between flex">
                            <div className="text-xl pl-4">2.ร้านโด่ง</div>
                            <div className="text-xl pl-4">8</div>
                        </div>
                        <div className="place-item-between flex">
                            <div className="text-xl pl-4">3.ร้านโด่ง</div>
                            <div className="text-xl pl-4">3</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-2 gap-4 bg-white rounded-2xl p-2 m-4 text-white text-2xl shadow-2xl">
                    <div className="bg-zinc-200 rounded-2xl p-2 h-40 pl-4 w-44 shadow-2xl">
                        <div>ออเดอร์</div>
                        <div className="flex place-content-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-19 bg-white rounded-full p-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </div>
                    </div>
                    <div className="bg-zinc-600 rounded-2xl p-2 h-40 pl-4 w-44 shadow-2xl">
                        <div>แผนที่</div>
                        <div className="flex place-content-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-19 bg-white rounded-full p-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                        </div>
                    </div>
                    <div className="bg-zinc-500 rounded-2xl p-2 h-40 pl-4 w-44 shadow-2xl">
                        <div>สินค้า</div>
                        <div className="flex place-content-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-19 bg-white rounded-full p-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>

                        </div>
                    </div>
                    <div className="bg-zinc-300 rounded-2xl p-2 h-40 pl-4 w-44 shadow-2xl">
                        <div>ต้นทุนกำไร</div>
                        <div className="flex place-content-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-19 bg-white rounded-full p-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}