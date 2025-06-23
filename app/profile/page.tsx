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
            <div className='phone md:hidden'>
                <div className="flex justify-center">
                    <div className='bg-white rounded-xl w-full h-200 text-center place-items-center'>
                        <div className='bg-black w-30 h-30 rounded-xl mt-20'>
                            รูปโปรไฟล์
                        </div>
                        <div className='mt-20 text-start'>
                            <div className='mb-2 text-lg'>ชื่อผู้ใช้งาน</div>
                            <input type="text" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='ชื่อผู้ใช้งาน' />
                            <div className='mb-2 text-lg'>ชื่อ</div>
                            <input type="text" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='ชื่อ' />
                            <div className='mb-2 text-lg'>สกุล</div>
                            <input type="text" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='สกุล' />
                            <div className='mb-2 text-lg'>เบอร์โทรศัพท์</div>
                            <input type="numbertic" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='เบอร์โทรศัพท์' />

                        </div>
                        <button className='mt-10 rounded-xl bg-amber-100 w-60 p-3'>ยืนยัน</button>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div>
                    <div className="flex justify-center">
                        <div className='bg-white rounded-xl w-full h-200 text-center place-items-center'>
                            <div className='bg-black w-30 h-30 rounded-xl mt-20'>
                                รูปโปรไฟล์
                            </div>
                            <div className='mt-20 text-start'>
                                <div className='mb-2 text-lg'>ชื่อผู้ใช้งาน</div>
                                <input type="text" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='ชื่อผู้ใช้งาน' />
                                <div className='mb-2 text-lg'>ชื่อ</div>
                                <input type="text" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='ชื่อ' />
                                <div className='mb-2 text-lg'>สกุล</div>
                                <input type="text" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='สกุล' />
                                <div className='mb-2 text-lg'>เบอร์โทรศัพท์</div>
                                <input type="numbertic" className='bg-gray-100 rounded-xl p-2 mb-2 w-70 border-black hover:bg-gray-100' placeholder='เบอร์โทรศัพท์' />
                            </div>
                            <button className='mt-10 rounded-xl bg-amber-100 w-60 p-3'>ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
