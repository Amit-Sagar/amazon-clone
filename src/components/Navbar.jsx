import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state)=>state.cart.quantity);
  return (
    <>
      <div className="h-[60px] flex items-center bg-black z-[100] sticky top-0">
        <Link to="/">
          <img
            className="w-[100px] object-contain  text-white"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="flex flex-1 items-center border-r-3">
          <input className="h-[34px] p-3 border-none w-[100%]" type="text" />
          <button className="bg-orange-300 px-2 h-[34px]">
            <FaSearch className=" bg-orange-300" />
          </button>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col my-10 mx-4 text-white">
            <span className="text-[10px]">Hello Guest</span>
            <Link to="/login">
              {" "}
              <span className="text-[13px]">Sign In</span>
            </Link>
          </div>
          <Link to="/return&order">
            <div className="flex flex-col my-10 mx-4 text-white">
              <span className="text-[10px]">Returns</span>
              <span className="text-[13px]">& Orders</span>
            </div>
          </Link>
          <div className="flex flex-col my-10 mx-4 text-white">
            <span className="text-[10px]">Your</span>
            <span className="text-[13px]">Prime</span>
          </div>
            <div className="flex items-center text-white">
            <Link to="/cart">
              <AiOutlineShoppingCart />
             </Link>
              <span className="my-3 mx-5">{quantity}</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
