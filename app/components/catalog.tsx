"use client"
import neyor from '../../public/neyor.png'
import Image from 'next/image'
export default function catalog() {
    return (
        <div className='md:grid grid-cols-3 gap-2'>
            <div className="bg-white rounded-xl p-4 mt-2 flex md:w-130">
                <div className=''>
                    <Image
                        src={neyor}
                        alt=""
                        className="rounded-xl shadow-lg w-50"
                    />
                </div>
                <div className='ml-4 w-full'>
                    <div className='text-xl'>ขนมปังกรอบเนยน้ำตาล</div>
                    <div className='truncate w-50 md:w-70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto ipsum est, inventore vel rerum. Quasi animi possimus voluptatem ducimus officiis suscipit optio necessitatibus magnam beatae deleniti corrupti, corporis vel.</div>
                    <div>
                        <div className='flex place-content-between mt-10 md:mt-14'>
                            <button className='w-40 rounded-xl bg-green-300 p-1 md:w-70'>สั่งสินค้า</button>
                            <button className='w-full rounded-xl bg-green-300 ml-1 p-1'>เพิ่มเข้าตระกร้า</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
