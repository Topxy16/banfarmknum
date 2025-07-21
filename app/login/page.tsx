"use client"
import Image from 'next/image'
import loginimg from '../../public/login.png'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Alert from '../components/alertSuccess'
import AlertF from '../components/alertFail'
import AlertToken from '../components/alerttoken'
import { useRouter } from 'next/navigation'

export default function Page() {
    const [setalerttoken, setAlerttoken] = useState(false)
    const router = useRouter()
    const [setalert, setAlert] = useState(false)
    const [setalertf, setAlertf] = useState(false)
    const [username, setName] = useState("")
    const [password, setPass] = useState("")

    const login = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'username': username, 'password': password }),
        })
        const resData = await res.json()
        if (resData.status === 1) {
            localStorage.setItem('token', resData.token)
            setAlert(true)
            setTimeout(() => {
                location.href = '/dashboard'
                setAlert(false)
            }, 2000);
        } else if (resData.status === 0) {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 2000);
        }
    }

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token')
            const check = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/checkLogin`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            const res = await check.json()
            if (res.status === 1) {
                router.push('/dashboard')
                return
            }
        }
        checkToken()
    }, [])


    return (
        <div>
            <Alert message='เข้าสู่ระบบสำเร็จ' detail='' show={setalert} onClose={() => { setAlert }} />
            <AlertF message='เข้าสู่ระบบไม่สำเร็จ' detail='' show={setalertf} onClose={() => { setAlertf }} />
            <AlertToken message='คุณไม่มีสิทธิเข้าถึง' detail='เนื่องจากคุณเข้าใช้งานอยู่' show={setalerttoken} onClose={() => setAlerttoken} />
            <div className="mt-40 place-content-center flex">
                <div className='flex bg-zinc-400 rounded-xl'>
                    <div>
                        <Image
                            src={loginimg}
                            alt="Picture of the author"
                            className='rounded-xl max-w-sm hidden md:block'
                        />
                    </div>
                    <div className='bg-white p-8 rounded-xl my-15 mx-5'>
                        <div className='text-4xl text-center'>เข้าสู่ระบบ</div>
                        <div className='flex p-2 mt-8 items-center gap-2 text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <div className='border-b-3 border-green-950'>
                                <input type="text" placeholder="ชื่อผู้ใช้งาน/เบอร์โทรศัพท์" onChange={event => setName(event.target.value)} />
                            </div>
                        </div>
                        <div className='flex p-2 mt-5 items-center gap-2 text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <div className='border-b-3 border-green-950'>
                                <input type="password" placeholder="รหัสผ่าน" onChange={event => setPass(event.target.value)} />
                            </div>
                        </div>
                        <div className='place-content-between flex mt-4 text-sm'>
                            <Link href="#">ลืมรหัสผ่าน</Link>
                            <Link href="/register">หากยังไม่มีบัญชี</Link>
                        </div>
                        <button className='bg-zinc-100 hover:bg-amber-900 text-white rounded-lg mt-10 p-2 w-full text-xl' onClick={login}>เข้าสู่ระบบ</button>

                    </div>
                </div>
            </div>
        </div >
    );
}
