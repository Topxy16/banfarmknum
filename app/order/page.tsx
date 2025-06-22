import OrderTable from '../components/orderTable'
import OrderTableP from '../components/orderTablep'
export default function Page() {
    return (
        <div className="mt-5 justify-center place-items-center">

            <div className='phone w-100 md:hidden'>
                <div className='bg-zinc-100 p-2 text-4xl rounded-lg mb-2 text-white font-semibold'>ออเดอร์</div>
                <div className='text-center flex gap-2'>
                    <div className='bg-zinc-400 rounded-lg text-white font-semibold text-4xl pt-10 shadow-xl w-60'>
                        <div className=''>วันนี้</div>
                        <div className='text-4xl pt-2 text-white'>10</div>
                    </div>
                    <div className='w-40'>
                        <div className='bg-zinc-500 rounded-lg text-white font-semibold text-xl pt-2 shadow-xl'>
                            <div className=''>ส่งแล้ว</div>
                            <div className='text-4xl pb-1 text-white'>8</div>
                        </div>
                        <div className='bg-zinc-600 rounded-lg text-black font-semibold text-xl pt-2 mt-2 shadow-xl'>
                            <div className=''>ยังไม่ส่ง</div>
                            <div className='text-4xl pb-1 text-black'>2</div>
                        </div>
                    </div>
                </div>
                <OrderTableP></OrderTableP>
            </div>

            <div className='hidden w-full p-2 md:block'>
                <div className='p-2 pt-4 text-3xl rounded-lg mb-2 text-black font-semibold'>สัปดาห์นี้</div>
                <div className="grid grid-cols-7 gap-4 text-black bg-white rounded-xl text-2xl h-30 shadow-2xl">
                    <div className='rounded-lg p-2'>จันทร์</div>
                    <div className='bg-zinc-800 text-white rounded-lg p-2 pl-5'>
                        อังคาร
                        <div className='text-sm pl-8'>
                            <div className=''>เนยน้ำตาล</div>
                            <div className='text-2xl'>10ห่อ</div>
                            <div className=''>ร้านลุงชัย</div>
                        </div>
                    </div>
                    <div className='rounded-lg p-2'>พุธ</div>
                    <div className='rounded-lg p-2'>
                        พฤหัส
                        <div className='text-sm pl-8'>
                            <div className=''>เนยน้ำตาล</div>
                            <div className='text-2xl'>10ห่อ</div>
                            <div className=''>ร้านลุงชัย</div>
                        </div>
                    </div>

                    <div className='rounded-lg p-2'>ศุกร์</div>
                    <div className='rounded-lg p-2'>เสาร์</div>
                    <div className='rounded-lg p-2'>อาทิตย์</div>
                </div>

                <div className='flex gap-2'>
                    <div className='bg-zinc-400 rounded-lg text-white font-semibold text-4xl shadow-xl p-2 mt-2 basis-full'>
                        <div className='place-content-between flex'>
                            <div className=''>วันนี้</div>
                            <div className='text-4xl text-white'>10</div>
                        </div>
                    </div>
                    <div className='bg-zinc-500 rounded-lg text-white font-semibold text-4xl shadow-xl p-2 mt-2 basis-full'>
                        <div className='place-content-between flex'>
                            <div className=''>ส่งแล้ว</div>
                            <div className='text-4xl text-white'>8</div>
                        </div>
                    </div>
                    <div className='bg-zinc-600 rounded-lg text-black font-semibold text-4xl shadow-xl p-2 mt-2 basis-full'>
                        <div className='place-content-between flex'>
                            <div className=''>ยังไม่ส่ง</div>
                            <div className='text-4xl text-black'>2</div>
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <OrderTable></OrderTable>
                </div>


            </div>




        </div>

    );
}
