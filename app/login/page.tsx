'use client'
import Image from 'next/image'
import loginimg from '../../public/login.png'
import React, { useState } from 'react'
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
            <div className="mt-40 w-srceen flex justify-center">
                <div className=" px-4 md:px-5 pt-4 pb-4 rounded-xl flex md:bg-amber-100">
                    <div>
                        <Image
                            src={loginimg}
                            width={350}
                            height={393}
                            alt="Picture of the author"
                            className='rounded-xl hidden md:block mr-5'
                        />
                    </div>

                    <div className='bg-white md:mt-10 w-xs h-90 rounded-xl justify-center text-center flex'>
                        <div className='mt-2'>
                            <p className='text-5xl pt-6 text-center font-thin'><b>เข้าสู่ระบบ</b></p>

                            <div className='pt-10 pr-2 pl-2 flex text-lg'>
                                <div className='pr-2 pt-2'>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg> */}

                                </div>
                                <div className='border-b-3 border-green-950'>
                                    <input type="text" placeholder="ชื่อผู้ใช้งาน/เบอร์โทรศัพท์" onChange={event => setName(event.target.value)} />
                                </div>
                            </div>

                            <div className='pt-5 pr-2 pl-2 flex text-lg'>
                                <div className='pr-2 pt-2'>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg> */}

                                </div>
                                <div className='border-b-3 border-green-950'>
                                    <input type="password" placeholder="รหัสผ่าน" onChange={event => setPass(event.target.value)} />
                                </div>
                            </div>

                            <div className='pt-3 grid grid-cols-2 text-sm'>
                                <p>ลืมรหัสผ่าน</p>
                                <p>หากยังไม่มีบัญชี</p>
                            </div>


                            <button className='bg-green-950 text-white rounded-lg mt-10 px-17 text-xl' onClick={login}>เข้าสู่ระบบ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
