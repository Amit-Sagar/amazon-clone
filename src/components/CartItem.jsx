import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../services/cartSlice';


const CartItem = ({data}) => {
  const dispatch= useDispatch();
  const removeCart =()=>{
    dispatch(cartActions.removeCart(data.id))
  }
  return (
    <>
    <div className='border border-gray-300 rounded mx-20 my-5'>
        <div className='w-full h-[250px] flex'>
        <img className='h-[180px] w-[30%] object-contain my-5' src={data.image} alt="/"/>
        <div className='w-[50%] my-5'>
          <p className='font-bold text-xl'>{data.title}</p>
          <p className='text-xs'>{data.description}</p>
           <p className='text-green-400 my-2'>In stock</p>
           <p>Eligible for free delivery</p>
           <p className='my-1'>Quantity: {data.quantity}</p>
           <button className='bg-red-500 px-3 py-1 rounded' onClick={removeCart}> Remove From Cart</button>
        </div>
        <div className='w-[20%] px-20 my-5'>
           <p className='font-bold text-xl'>Price</p>
           <p>${data.price}</p>
        </div>
        </div>
        </div>
    </>
  )
}

export default CartItem