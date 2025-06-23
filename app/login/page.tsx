'use client'
import Image from 'next/image'
import loginimg from '../../public/login.png'
import React, { useState } from 'react'
import Link from 'next/link'
export default function Page() {
    const [username, setName] = useState("")
    const [password, setPass] = useState("")
    const login = async () => {
        console.log("user = " + username)
        console.log("pass = " + password)
        const res = await fetch('https://3f7e-1-20-61-190.ngrok-free.app/api/auth/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'username': username, 'password': password }),
        })
        const resData = await res.json()
        console.log(resData)

        localStorage.setItem("token", resData.token)

    }
    const logincheck = async () => {
        const token = localStorage.getItem('token');
        const res = await fetch('https://3f7e-1-20-61-190.ngrok-free.app/api/products/', {
            headers: { authorization: `Bearer ${token}` }
        })
        const resData = await res.json()
        console.log(resData)
    }
    return (
        <div>
            <div className="mt-10 flex justify-center">
                <div className='md:w-180'>
                    <div className="bg-amber-100 p-4 rounded-xl flex items-center md:gap-4">
                        <div>
                            <Image
                                src={loginimg}
                                alt="Picture of the author"
                                className='rounded-xl hidden md:block'
                            />
                        </div>
                        <div className='bg-white p-10 rounded-xl md:w-100 h-100'>
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
                            <button className='bg-green-950 text-white rounded-lg mt-10 p-2 w-full text-xl' onClick={login}>เข้าสู่ระบบ</button>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
