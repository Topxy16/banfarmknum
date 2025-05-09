import ProductTableP from '../component/ProductTableP'
import ProductTable from '../component/ProductTable'


export default function page() {
    return (
        <div className="mt-5 justify-center place-items-center">
            <div className='phone w-100 mt-10 md:hidden'>
                <div className='bg-zinc-100 p-2 text-4xl rounded-lg mb-2 text-white font-semibold'>สินค้า</div>
                <div>
                    <ProductTableP></ProductTableP>
                </div>
            </div>
            <div className='hidden w-full p-2 md:block'>
            <div className='bg-zinc-100 p-2 pt-4 text-3xl rounded-lg mb-2 text-white font-semibold'>สินค้า</div>
                <div>
                    <ProductTable></ProductTable>
                </div>
            </div>
        </div>
    )
}
