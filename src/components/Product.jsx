import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/productApi";
import { productIdActions } from "../services/productId";

const Product = () => {
  const { data, isFetching } = useGetProductsQuery(15);
  const dispatch = useDispatch();
console.log(data);
  return (
    <>
        {data?.map((item, index) => {
          return (
            <div key={item.id} className="w-[300px] h-[380px] m-5 p-5 bg-white border border-gray-200 flex items-center rounded-lg transform transition duration-500 hover:scale-110">
            <div className="product_info">
              <Link to="/productdetails" onClick={()=>dispatch(productIdActions.getId(item.id))}>
              <p>{item.title}</p>
              <p className="product_price">
                <small>$</small>
                <strong>{item.price}</strong>
              </p>
              <div className="flex">
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
              <img
                className="h-[180px] w-[100%] object-contain mb-[10px]"
                src={item.image}
                alt=""
              />
              </Link>
              <button className="bg-orange-300 p-2">Add to Basket</button>
            </div>
      </div>
          );
        })}
    </>
  );
};

export default Product;
