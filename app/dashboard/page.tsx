import Chart from '../component/chart'
import Calender from '../component/calender'
import Piechart from '../component/piechart'
import SavingGoal from "../component/SavingGoal"
import Image from 'next/image'
import bank from '../../public/bank.jpg'
export default function Page() {
    return (
        <div>
            <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
            <div className="w-srceen justify-center">
                <div className="bg-zinc-400 rounded-xl drop-shadow-2xl w-full p-2 mb-4">                    
                    <div className="p-4 text-3xl">ภาพรวมวันนี้</div>
                    <div className="flex gap-2 text-3xl">
                        <div className="bg-white rounded-xl p-2 m-2 w-full h-22 text-center place-content-center">💰 1,250฿</div>
                        <div className="bg-white rounded-xl p-2 m-2 w-full h-22 text-center place-content-center">📦 12 ออเดอร์</div>
                        <div className="bg-white rounded-xl p-2 m-2 w-full h-22 text-center place-content-center">🏪 8 ร้าน</div>
                    </div>
                </div>

                <div className='flex gap-4 mb-4'>
                    <div className='bg-white rounded-xl p-4 w-full text-3xl'>
                        <div>แผนที่</div>
                        <div className='bg-gray-300 rounded-2xl flex gap-6 h-60'>
                            <div className='bg-zinc-400 rounded-2xl w-full p-4'>📍</div>
                            <div className='w-sm overflow-y-scroll'>
                                <div className='bg-white rounded-2xl m-4 p-3 drop-shadow-2xl'>ร้านโด่ง</div>
                                <div className='bg-white rounded-2xl m-4 p-3 drop-shadow-2xl'>ร้านย่าแดง</div>
                                <div className='bg-white rounded-2xl m-4 p-3 drop-shadow-2xl'>ร้านย่าใส</div>
                                <div className='bg-white rounded-2xl m-4 p-3 drop-shadow-2xl'>ร้านป้าตุก</div>
                            </div>
                        </div>

                    </div>
                    <div className='bg-zinc-300 rounded-xl p-4 w-xl text-center text-3xl text-white'>
                        <div>การเงินเดือนนี้</div>
                        <div>
                            <Piechart></Piechart>
                        </div>
                    </div>
                    <div className='bg-white  rounded-xl p-4 w-xl text-center'>
                        <div className='text-3xl'>เครื่องมือ</div>
                        <div className='text-2xl text-left pt-4 grid gap-3 place-content-center'>
                            <div>➕ เพิ่มเมนู</div>
                            <div>📋 ดูออเดอร์ </div>
                            <div>🏪 จัดการร้าน</div>
                            <div>📍 จัดการแผนที่</div>
                            <div>📊 รายงาน</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="bg-zinc-800 rounded-xl drop-shadow-2xl p-2 text-white w-full">
                        <div className="p-4 text-3xl">ออเดอร์</div>
                        <div className="text-2xl pl-12 pb-2">เนยน้ำตาล10 ร้านโด่ง....</div>
                        <div className="text-2xl pl-12 pb-2">เนยน้ำตาล10 ร้านโด่ง....</div>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-2xl p-2 w-full">
                        <div className="p-4 text-3xl">จัดอันดับร้านค้า</div>
                        <div className="grid grid-cols-2 text-left">
                            <div className="text-2xl pb-1 pl-10">1.ร้านโด่ง🏆</div>
                            <div className="text-2xl pb-1 pl-10">2000 บาท</div>
                            <div className="text-2xl pb-1 pl-10">2.ร้านย่าแดง</div>
                            <div className="text-2xl pb-1 pl-10">1600 บาท</div>
                            <div className="text-2xl pb-1 pl-10">3.ร้านลุงพล</div>
                            <div className="text-2xl pb-1 pl-10">1000 บาท</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-2xl p-2 w-full">
                        <div className='text-3xl p-4 text-left'>ร้านค้าใหม่</div>
                        <div className='pl-10 pb-1 text-2xl'>
                            <div>👤 ร้านย่าใส</div>
                            <div>👤 ร้านข้าวแกง</div>

                        </div>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-2xl p-2 w-full">
                        <div className='text-3xl p-4 text-left'>แจ้งเตือน</div>
                        <div className='pl-5 h-24 overflow-y-auto'>
                            <div className='bg-gray-200 p-2 rounded-2xl mb-2'>⚠️ ลูกค้าค้างชำระ</div>
                            <div className='bg-gray-200 p-2 rounded-2xl mb-2'>⚠️ ระบบมีการอัพเดท</div>
                            <div className='bg-gray-200 p-2 rounded-2xl mb-2'>⚠️ ระบบมีการอัพเดท</div>
                            <div className='bg-gray-200 p-2 rounded-2xl mb-2'>⚠️ ระบบมีการอัพเดท</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mb-2">
                    <div className="bg-white rounded-xl drop-shadow-2xl w-full p-2">
                        <div className="p-4 text-3xl">ยอดขายเดือนนี้</div>
                        <Chart></Chart>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-2xl w-4xl p-2">
                        <div className="p-4 text-3xl text-center">เป้าหมายเดือนนี้</div>

                        <div className='place-items-center'>

                            <Image
                                src={bank}
                                alt="Picture of the author"
                                className='rounded-xl w-40'
                            />

                            <SavingGoal goal={5000} current={4600} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
