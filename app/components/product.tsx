'use client'
import UpdateProduct from '../components/product_update'
import DeleteProduct from '../components/product_delete'
import neyor from '../../public/neyor.png'
import Image from 'next/image'
import Alert from '../components/alertSuccess'
import AlertF from '../components/alertFail'


import { useState } from 'react'

type propsProduct = {
    product: ProductType[]
    propsCategory: CategoryType[]
}
type ProductType = {
    p_ID: number,
    p_Name: string,
    p_Detail: string,
    p_Price: number,
    c_ID: number,
    p_Amount: number,
    c_Name: string,
    p_Status: number,
    p_Img: string
}
type CategoryType = {
    c_ID: number,
    c_Name: string
}

export default function Product({ product, propsCategory }: propsProduct) {
    const [setalert, setAlert] = useState(false)
    const [setalertf, setAlertf] = useState(false)
    const [showproduct_update, setShowProduct_update] = useState<boolean>(false)
    const [showproduct_dalete, setShowProduct_delete] = useState<boolean>(false)
    const [productUpdate, setProductUpdate] = useState<ProductType>()
    const [p_ID, setProductID] = useState<number>(0)
    const handleDelete = async (ID: number) => {
        const token = localStorage.getItem('token')
        console.log(`ลบสินค้าแล้ว ${ID}`)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/deleteProduct/` + ID, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })
            const resData = await res.json()
            if (resData.status === 1) {
                setAlert(true)
                setTimeout(() => {
                    setShowProduct_delete(false)
                    setAlert(false)
                }, 2000);
            } else if (resData.status === 0) {
                setAlertf(true)
                setTimeout(() => {
                    setShowProduct_delete(false)
                    setAlertf(false)
                }, 2000);
            }
            setShowProduct_delete(false)
        } catch (error) {
            console.log(error)
            console.log('Delete Product Unsuccessfully')
            setShowProduct_delete(false)
        }
    }

    return (
        <div>
            <Alert message='ลบสินค้าสำเร็จ' detail='' show={setalert} onClose={() => { setAlert }} />
            <AlertF message='ลบสินค้าไม่สำเร็จ' detail='' show={setalertf} onClose={() => { setAlertf }} />
            <div>
                <div className='md:grid grid-cols-4 gap-2'>
                    {product.map((item) => (
                        <div key={item.p_ID} className="bg-white rounded-xl text-black p-4 shadow-xl h-40 my-2">
                            <div className='flex'>
                                <div className=''>
                                    <Image
                                        src={neyor}
                                        alt=""
                                        className="rounded-xl shadow-lg"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className='w-50'>
                                        <div>{item.p_Name}</div>
                                        <div className='text-sm'>ประเภท : {item.c_Name}</div>
                                    </div>
                                    <div className='mt-2'>
                                        <div className="flex text-2xl place-content-end gap-1 mt-5">
                                            <button className="bg-red-900 text-white rounded-xl p-2 hover:bg-red-700" id='del' onClick={() => { setProductID(item.p_ID), setShowProduct_delete(true) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </button>
                                            <button className="bg-yellow-900 text-white rounded-xl p-2 hover:bg-yellow-700" id='update' onClick={() => { setProductUpdate(item), setShowProduct_update(true) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                </svg>

                                            </button>
                                            {/* <div className='mt-2 place-content-center ml-15'>
                                            <ProductToggle initialStatus={true} onToggle={handleToggle} />
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>{showproduct_update && productUpdate && (
                    <div >
                        <UpdateProduct
                            productUpdate={productUpdate}
                            propsCategory={propsCategory}
                            show={showproduct_update}
                            onClose={() => setShowProduct_update(false)} />

                    </div>
                )}
                <DeleteProduct
                    show={showproduct_dalete}
                    title="ลบสินค้า"
                    message="คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?"
                    confirmText="ลบ"
                    secondaryText="ยกเลิก"
                    onConfirm={() => {
                        // เรียก API ลบสินค้า
                        handleDelete(p_ID)
                        setShowProduct_delete(false)
                    }}
                    onSecondary={() => setShowProduct_delete(false)}
                />
            </div>
        </div >
    )
}