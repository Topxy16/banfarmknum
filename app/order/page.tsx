'use client'

import Order from '../components/order'
import AlertToken from '../components/alerttoken'
import Wloderwidget from '../components/WeeklyOrderWidget'
import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { useRouter } from 'next/navigation'
type OrderType = {
    o_ID: number,
    u_ID: number,
    o_total: number,
    o_date: string,
    o_endDate: string,
    o_image: string,
    o_Status: number,
    latitude: string,
    longitude: string,
    de_firstName: string,
    de_lastName: string,
    de_tel: string
}
export default function Page() {
    const [setalerttoken, setAlerttoken] = useState(false)
    const router = useRouter()
    const [orderData, setOder] = useState<OrderType[]>([])
    const socketRef = useRef<Socket | null>(null)
    const fetchOrder = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
        })
        const resData = await res.json()
        setOder(resData.data)
    }
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                setAlerttoken(true)
                setTimeout(() => {
                    router.push('/login')
                }, 3000)
                return
            }
            const check = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/checkLogin`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            const res = await check.json()
            if (res.status === 0) {
                setAlerttoken(true)
                setTimeout(() => {
                    router.push('/login')
                }, 3000)
                return
            }
            fetchOrder()
        }
        checkToken()

        if (!socketRef.current) {
            socketRef.current = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`)
            socketRef.current.on('connect', () => {
                console.log('🟢 Socket connected:', socketRef.current?.id)
            })
            socketRef.current.on(`refreshOrders`, () => {
                fetchOrder()
            })
        }


    }, [])
    return (
        <div className='w-full mx-auto p-4'>
            <div className='phone md:hidden'>
                <div className='bg-zinc-100 p-2 text-4xl rounded-lg mb-2 text-white font-semibold'>ออเดอร์</div>
                <div className='text-center flex gap-2'>
                    <div className='bg-zinc-400 rounded-lg text-white font-semibold text-4xl pt-10 w-60'>
                        <div className=''>วันนี้</div>
                        <div className='text-4xl pt-2 text-white'>10</div>
                    </div>
                    <div className='w-40'>
                        <div className='bg-zinc-500 rounded-lg text-white font-semibold text-xl pt-2'>
                            <div className=''>ส่งแล้ว</div>
                            <div className='text-4xl pb-1 text-white'>8</div>
                        </div>
                        <div className='bg-zinc-600 rounded-lg text-black font-semibold text-xl pt-2 mt-2'>
                            <div className=''>ยังไม่ส่ง</div>
                            <div className='text-4xl pb-1 text-black'>2</div>
                        </div>
                    </div>
                </div>
                <Order order={orderData} />
            </div>
            <div className='hidden md:block'>
                <div className='mb-2'>ออเดอร์</div>

                <Wloderwidget orders={orderData}/>

                <div className='flex gap-2 mt-2'>
                    <div className='bg-zinc-400 rounded-lg text-white font-semibold text-4xl p-2 mt-2 basis-full'>
                        <div className='place-content-between flex'>
                            <div className=''>วันนี้</div>
                            <div className='text-4xl text-white'>10</div>
                        </div>
                    </div>
                    <div className='bg-zinc-500 rounded-lg text-white font-semibold text-4xl p-2 mt-2 basis-full'>
                        <div className='place-content-between flex'>
                            <div className=''>ส่งแล้ว</div>
                            <div className='text-4xl text-white'>8</div>
                        </div>
                    </div>
                    <div className='bg-zinc-600 rounded-lg text-black font-semibold text-4xl p-2 mt-2 basis-full'>
                        <div className='place-content-between flex'>
                            <div className=''>ยังไม่ส่ง</div>
                            <div className='text-4xl text-black'>2</div>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <Order order={orderData} />
                </div>

            </div>
            <AlertToken message='คุณไม่มีสิทธิเข้าถึง' detail='กรุณาล็อกอินก่อนเข้าใช้งาน' show={setalerttoken} onClose={() => setAlerttoken} />
        </div>

    );
}
