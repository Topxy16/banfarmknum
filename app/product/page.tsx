'use client'
import Product from '../components/product'
import AddProduct from '../components/product_add'
import AlertToken from '../components/alerttoken'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { io, Socket } from 'socket.io-client'
type ProductType = {
    p_ID: number,
    p_Name: string,
    p_Detail: string,
    p_Price: number,
    p_Amount: number,
    c_Name: string,
    c_ID: number,
    p_Status: number,
    p_Img: string
}
type CategoryType = {
    c_ID: number,
    c_Name: string
}
export default function page() {
    const [setalerttoken, setAlerttoken] = useState(false)
    const router = useRouter()
    const [productData, setProduct] = useState<ProductType[]>([])
    const [categoryData, setCategory] = useState<CategoryType[]>([])
    const [showproduct_add, setShowproduct_add] = useState(false)
    const socketRef = useRef<Socket | null>(null)

    const fetchProduct = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        const resData = await res.json()
        setProduct(resData.data)
    }
    const fetchCategory = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys/`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        const resData = await res.json()
        setCategory(resData.data)
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
            fetchProduct()
            fetchCategory()
        }
        checkToken()

        if (!socketRef.current) {
            socketRef.current = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`)
            socketRef.current.on('connect', () => {
                console.log('🟢 Socket connected:', socketRef.current?.id)
            })
            socketRef.current.on(`refreshProduct`, () => {
                fetchProduct()
            })
        }
        return () => {
            socketRef.current?.disconnect()
            socketRef.current = null
        }
    }, [])
    return (
        <div className='w-full mx-auto p-4'>
            <div className='mb-2'>สินค้า</div>
            
            <div className="bg-white rounded-2xl p-1.5 w-full flex">
                <div className="bg-zinc-400 flex w-full p-1.5 rounded-2xl place-items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                    <input type="text" id="first_name" className="text-sm rounded-2xl bg-white p-2 w-full mx-2" placeholder="เนยน้ำตาล" required />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button onClick={() => setShowproduct_add(true)} className='bg-green-900 hover:bg-green-700 rounded-xl p-1 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div>
                <AddProduct category={categoryData} show={showproduct_add} onClose={() => setShowproduct_add(false)} />
                <div className=''>
                    <div>
                        {/* {product.map((item,index)=> <div key={index}> {item.p_Name} </div>  )} */}
                        <Product product={productData} propsCategory={categoryData} />
                    </div>
                </div>
            </div>
            <AlertToken message='คุณไม่มีสิทธิเข้าถึง' detail='กรุณาล็อกอินก่อนเข้าใช้งาน' show={setalerttoken} onClose={() => setAlerttoken} />
        </div>
    )
}

