'use client'
import Product from '../components/product'
import AddProduct from '../components/product_add'
import { useEffect, useRef,useState } from 'react'
import { io, Socket } from 'socket.io-client'
    type ProductType = {
        p_ID: number,
        p_Name: string,
        p_Detail: string,
        p_Price: number,
        p_Amount: number,
        c_Name: string,
        c_ID : number,
        p_Status: number,
        p_Img : string
    }
    type CategoryType = {
        c_ID : number,
        c_Name : string 
    }
export default function page() {
    const [showproduct_add, setShowproduct_add] = useState(false)
    const [categoryData , setCategory] = useState<CategoryType[]>([])
    const [productData, setProduct] = useState<ProductType[]>([])
    const socketRef = useRef<Socket | null>(null)
    const fetchProduct = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/`)
            const resData = await res.json()
            setProduct(resData.data)
        }
    useEffect (()=>{
        if(!socketRef.current){
            socketRef.current = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`)
            socketRef.current.on('connect', () => {
                console.log('🟢 Socket connected:', socketRef.current?.id)
            })
            socketRef.current.on(`refreshProduct`,()=>{
            fetchProduct()
        })
        }
       
        const fetchCategory = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys/`)
            const resData = await res.json()
            setCategory(resData.data)
        }
        fetchProduct()
        fetchCategory()
        return ()=>{
             socketRef.current?.disconnect()
                socketRef.current = null
        }
    },[])
    return (
        <div>
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
                <AddProduct category = {categoryData} show={showproduct_add} onClose={() => setShowproduct_add(false)} />
                <div className=''>
                    <div>
                        {/* {product.map((item,index)=> <div key={index}> {item.p_Name} </div>  )} */}
                        <Product product={productData} propsCategory={categoryData}  />
                    </div>
                </div> 
            </div>
        </div>
    )
}

