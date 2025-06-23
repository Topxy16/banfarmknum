'use client'
import Product from '../components/product'
import AddProduct from '../components/addproduct'
import { useEffect, useState } from 'react'

    type ProductType = {
        p_ID: Number,
        p_Name: String,
        p_Detail: String,
        p_Price: Number,
        p_Amount: Number,
        c_Name: String,
        p_Status: Number,
        p_Img : String
    }
    type CategoryType = {
        c_ID : Number,
        c_Name : String 
    }
export default function page() {
    const [showModal, setShowModal] = useState(false)
    const [categoryData , setCategory] = useState<CategoryType[]>([])
    const [productData, setProduct] = useState<ProductType[]>([])
    useEffect (()=>{
        const fetchProduct = async () => {
            const res = await fetch(`https://bnvw3t5t-8080.asse.devtunnels.ms/api/products/`)
            const resData = await res.json()
            setProduct(resData.data)
        }
        const fetchCategory = async () => {
            const res = await fetch(`https://bnvw3t5t-8080.asse.devtunnels.ms/api/categorys/`)
            const resData = await res.json()
            setCategory(resData.data)
        }
        fetchCategory()
        fetchProduct()
    },[])
    return (
        <div className=''>

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
                    <button onClick={() => setShowModal(true)} className='bg-white rounded-xl p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div>
                <AddProduct   Category={categoryData} show={showModal} onClose={() => setShowModal(false)} />
                <div className=''>
                    <div>
                        {/* {product.map((item,index)=> <div key={index}> {item.p_Name} </div>  )} */}
                        <Product product={productData} />
                    </div>
                </div> 
            </div>
        </div>
    )
}

