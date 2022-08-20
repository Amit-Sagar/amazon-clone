import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.itemList);
  let total = 0;
  console.log(cartItem);
  cartItem?.forEach((item) => {
    total += item.totalPrice;
  });
  console.log(cartItem);
  return (
    <>
      {cartItem.length ? (
        <>
        <div>
          {cartItem?.map((item) => (
            <CartItem data={item} />
          ))}
        </div>
         <hr className="font-bold mx-10" />
         <div className="text-right mx-20 my-8">
           <p className="font-bold text-2xl">SubTotal : ${total}</p>
         </div>
         </>
      ) : (
        <div className=" w-[90%] h-[200px] border border-gray-300 m-20">
            <p className="text-center m-10 font-bold text-3xl" >Your Cart is Empty</p>
        </div>
      )}

     
    </>
  );
};

export default Cart;
