import React from "react";
import {useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productIdActions } from "../services/productId";
import { cartActions } from "../services/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(
      cartActions.addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        description : product.description,
      })
    );
  };
  return (
    <>
      <div
        key={product?.id}
        className="w-[300px] h-[380px] m-5 p-5 bg-white border border-gray-200 flex items-center rounded-lg transform transition duration-500 hover:scale-110"
      >
        <div className="product_info">
          <Link
            to="/productdetails"
            onClick={() => dispatch(productIdActions.getId(product?.id))}
          >
            <p>{product?.title}</p>
            <p className="product_price">
              <small>$</small>
              <strong>{product?.price}</strong>
            </p>
            <div className="flex">
              <p>*</p>
              <p>*</p>
              <p>*</p>
            </div>
            <img
              className="h-[180px] w-[100%] object-contain mb-[10px]"
              src={product?.image}
              alt=""
            />
          </Link>
          <button className="bg-orange-300 p-2" onClick={addCart}>
            Add to Basket
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
