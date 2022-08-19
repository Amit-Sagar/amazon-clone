import React from 'react'
import Product from '../components/Product'
import '../index.css'
import { useGetProductsQuery } from '../services/productApi'

const Home = () => {
  return (
        <div className='flex justify-center mx-auto my-auto max-w-[1500px]'>
            <div className="home_container">
            <img className="w-[100%] z-[-1] mb-[-150px] img" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"  alt=""/>
            <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 m-20'>
             <Product/>
             </div>
            </div>
        </div>
  )
}

export default Home