import React from 'react'
import { useGetSingleProductQuery } from '../services/productApi'
import { useSelector } from 'react-redux';

const ProductDetails = () => {
    const productid= useSelector((state)=>state.productId.id);
    const {data,isFetching}= useGetSingleProductQuery(productid);
    console.log(data)
  return (
    <>
    <div className='w-[95%] h-[500px] border border-gray-200 m-10 flex'>
        <img className=" w-[380px] h-[450px] p-10" src={data?.image} alt="/"/>
        <div className='p-7 m-5'>
            <h1 className='text-xl'>{data?.title}</h1>
            <p>$</p>
            <h2>{data?.price}</h2>
        </div>
    </div>
    </>
  )
}

export default ProductDetails