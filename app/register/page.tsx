'use client'
import Image from 'next/image'
import loginimg from '../../public/login.png'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AlertRegister from '../components/alertallaround'
export default function Page() {
    const [modalOpen, setModalOpen] = useState(false)
    const router = useRouter();

    const [username, setName] = useState("")
    const [password, setPass] = useState("")
    const [tel, setTel] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const [repassword, setRepassword] = useState("")

    const [showcheckmessage, setShowmessage] = useState(false)
    const [checkmessage, setCheckmessage] = useState("")

    const [showPasscheckmessage, setShowPassmessage] = useState(false)

    const [buttonState, setButtonState] = useState(true)

    const [isUsernameAvailable, setIsUsernameAvailable] = useState(false)

    useEffect(() => {
        if (password === '' || repassword === '') {
            setShowPassmessage(false)
        } else {
            setShowPassmessage(true)
        }
        if (
            username === '' ||
            password === '' ||
            tel === '' ||
            fname === '' ||
            lname === '' ||
            repassword === '' ||
            password !== repassword ||
            !isUsernameAvailable
        ) {
            setButtonState(true)
        } else {
            setButtonState(false)
        }
    }, [username, password, repassword, tel, fname, lname, isUsernameAvailable])

    const register = async () => {
        const res = await fetch('https://bnvw3t5t-8080.asse.devtunnels.ms/api/auth/register', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                'u_userName': username,
                'u_passWord': password,
                'de_firstName': fname,
                'de_lastName': lname,
                'de_tel': tel
            }),
        })
        const resData = await res.json()
        console.log(resData.message)
        if (resData.message === 'Register Success') {
            setModalOpen(true)
        }

    }
    const checkuser = async (user: string) => {
        if (user.trim() === "") {
            setShowmessage(false)
            setCheckmessage("")
            setIsUsernameAvailable(false)
            return
        }
        const res = await fetch('https://bnvw3t5t-8080.asse.devtunnels.ms/api/auth/check', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'u_userName': user }),
        })
        const resData = await res.json()
        setShowmessage(true)
        setCheckmessage(resData.message)

        if (resData.message === "A username can be used") {
            setIsUsernameAvailable(true)
        } else {
            setIsUsernameAvailable(false)
        }
    }

    return (
        <div>

            <div className='mt-40 place-content-center flex'>
                <div className='flex bg-zinc-400 rounded-xl'>
                    <div>
                        <Image
                            src={loginimg}
                            alt="Picture of the author"
                            className='rounded-xl max-w-sm hidden md:block'
                        />
                    </div>
                    <div className='bg-white p-8 rounded-xl my-5 mx-5'>
                        <div className='text-4xl text-center'>สมัครสมาชิก</div>
                        <div className='mt-5 text-lg'>
                            <div>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 mb-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <input type="text" placeholder="ชื่อผู้ใช้งาน" className='border-b-3 border-green-950 mb-4' onChange={(e) => { checkuser(e.target.value); setName(e.target.value) }} />
                                    <div>
                                        {showcheckmessage && (
                                            <div className="ml-2">
                                                {checkmessage === "A username can be used" ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth={1.5} stroke="green" className="size-6 mb-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth={1.5} stroke="red" className="size-6 mb-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='flex ml-8 gap-1'>
                                    <div>
                                        <input type="text" placeholder="ชื่อ" className='border-b-3 border-green-950 mb-4 max-w-28 min-w-26' onChange={(e) => { setFname(e.target.value) }} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="สกุล" className='border-b-3 border-green-950 mb-4 max-w-28 min-w-26' onChange={(e) => { setLname(e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 mb-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <input type="text" placeholder="เบอร์โทรศัพท์" className='border-b-3 border-green-950 mb-4' onChange={(e) => { setTel(e.target.value) }} />
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 mb-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <input type="password" placeholder="รหัสผ่าน" className='border-b-3 border-green-950 mb-4' onChange={(e) => { setPass(e.target.value) }} />
                                <div>
                                    {showPasscheckmessage && (
                                        <div className="ml-1 mb-1">
                                            {password === repassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5} stroke="green" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5} stroke="red" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='ml-8 flex items-center'>
                                <input
                                    type="password"
                                    placeholder="ยืนยันรหัสผ่าน"
                                    className='border-b-3 border-green-950 mb-4'
                                    onChange={(e) => { setRepassword(e.target.value) }}
                                />
                                {showPasscheckmessage && (
                                    <div className="ml-1 mb-1">
                                        {password === repassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5} stroke="green" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5} stroke="red" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className='place-content-end flex mt-2'>
                                <Link href="/login" className='text-sm'>หากมีบัญชีแล้ว</Link>
                            </div>
                            <button
                                className={`rounded-xl mt-10 p-2 text-xl w-full text-white ${!buttonState
                                    ? 'bg-green-600 hover:bg-green-800'
                                    : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                                disabled={buttonState}
                                onClick={register}>
                                สมัครสมาชิก
                            </button>
                            <AlertRegister
                                isOpen={modalOpen}
                                title="สมัครสมาชิกสำเร็จ"
                                message="คุณต้องการไปเพิ่มข้อมูลส่วนตัว หรือไปหน้าแดชบอร์ด?"
                                confirmText="ไปเพิ่มข้อมูล"
                                secondaryText="ไปหน้า Dashboard"
                                onConfirm={() => router.push('/profile')}
                                onSecondary={() => router.push('/dashboard')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
