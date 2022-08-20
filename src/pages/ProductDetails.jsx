import React from "react";
import { useGetSingleProductQuery } from "../services/productApi";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const productid = useSelector((state) => state.productId.id);
  const { data, isFetching } = useGetSingleProductQuery(productid);
  console.log(data);
  return (
    <>
      <div className="w-[95%] h-[500px] border border-gray-200 m-10 flex">
        <img className=" w-[380px] h-[450px] p-10" src={data?.image} alt="/" />
        <div className="p-7 m-5">
          <h1 className="font-bold text-xl">{data?.title}</h1>
          <h2 className="my-5">Price : ${data?.price}</h2>
          <h2>Rating : {data?.rating?.rate}</h2>
          <h3 className="font-bold text-md mt-5">Description</h3>
          <p className="text-sm">{data?.description}</p>
          <button className="m-20 bg-orange-400 px-10 py-3 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
