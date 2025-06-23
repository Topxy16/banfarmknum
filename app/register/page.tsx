'use client'
import Image from 'next/image'
import loginimg from '../../public/login.png'
import React, { useState, useEffect } from 'react'
export default function Page() {

    const [username, setName] = useState("")
    const [password, setPass] = useState("")
    const [tel, setTel] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const [repassword, setRepassword] = useState("")

    const [showcheckmessage, setShowmessage] = useState(false)
    const [checkmessage, setCheckmessage] = useState("")

    const [showPasscheckmessage, setShowPassmessage] = useState(false)
    const [checkPassmessage, setCheckPassmessage] = useState("")

    const [buttonState, setButtonState] = useState(true)

    useEffect(() => {
        if (password === '' || repassword === '') {
            setShowPassmessage(false)
        } else if (password === repassword) {
            setShowPassmessage(true)
            setCheckPassmessage("✅ รหัสผ่านตรงกัน")
        } else {
            setShowPassmessage(true)
            setCheckPassmessage("❌ รหัสผ่านไม่ตรงกัน")
        }
        if (username === ''
            || password === ''
            || tel === ''
            || fname === ''
            || lname === ''
            || repassword === ''
            || password !== repassword) {
            setButtonState(true)
        } else {
            setButtonState(false)
        }
    }, [password, repassword, username, tel, fname, lname])

    const register = async () => {
        // const res = await fetch('https://3f7e-1-20-61-190.ngrok-free.app/api/auth/login', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify({ 'u_userName': username, 'u_passWord': password }),
        // })
        // const resData = await res.json()
        // console.log(resData)
        console.log("regis")

    }
    const checkuser = async (user: String) => {
        const res = await fetch('https://df5d-118-174-178-92.ngrok-free.app/api/auth/check', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'u_userName': user }),
        })
        const resData = await res.json()
        setShowmessage(true)
        setCheckmessage(resData.message)
        if (user == "") {
            setShowmessage(false)
        }
    }
    return (
        <div>
            <div className="mt-10 flex justify-center">
                <div className=' md:w-180'>
                    <div className='bg-amber-100 p-4 rounded-xl flex md:gap-4'>
                        <div>
                            <Image
                                src={loginimg}
                                alt="Picture of the author"
                                className='rounded-xl hidden md:block w-full'
                            />
                        </div>
                        <div className='bg-white p-10 rounded-xl md:w-150'>
                            <div className='text-4xl text-center'>สมัครสมาชิก</div>
                            <div className='mt-5 text-lg'>
                                <div>
                                    <input type="text" placeholder="ชื่อผู้ใช้งาน" className='border-b-3 border-green-950 mb-4' onChange={(e) => { checkuser(e.target.value); setName(e.target.value) }} />
                                    <div>{showcheckmessage && <p>{checkmessage}</p>}</div>

                                </div>
                                <div className='gird gird-cols-2 gap-2'>
                                    <div className=''>
                                        <input type="text" placeholder="ชื่อ" className='border-b-3 border-green-950 mb-4' onChange={(e) => { setFname(e.target.value) }} />
                                    </div>
                                    <div className=''>
                                        <input type="text" placeholder="สกุล" className='border-b-3 border-green-950 mb-4' onChange={(e) => { setLname(e.target.value) }} />
                                    </div>
                                </div>



                                <div>
                                    <input type="text" placeholder="เบอร์โทรศัพท์" className='border-b-3 border-green-950 mb-4' onChange={(e) => { setTel(e.target.value) }} />
                                </div>
                                <div>
                                    <input type="text" placeholder="รหัสผ่าน" className='border-b-3 border-green-950 mb-4' onChange={(e) => { setPass(e.target.value) }} />
                                </div>
                                <div>
                                    <input type="text" placeholder="ยืนยันรหัสผ่าน" className='border-b-3 border-green-950 mb-4' onChange={(e) => { setRepassword(e.target.value) }} />
                                    <div>{showPasscheckmessage && <p>{checkPassmessage}</p>}</div>
                                </div>
                                <div className='text-sm text-end'>หากมีบัญชีแล้ว</div>

                                <button className='bg-green-600 hover:bg-green-800 rounded-xl mt-10 p-2 text-xl w-full text-white' disabled={buttonState} onClick={register}>
                                    สมัครสมาชิก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
