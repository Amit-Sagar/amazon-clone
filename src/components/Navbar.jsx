import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/productApi";
import { searchActions } from "../services/searchSlice";

const Navbar = () => {
  const [search,setSearch]= useState("");
  const quantity = useSelector((state)=>state.cart.quantity);
  const {data,isFeching}= useGetCategoriesQuery(search);
  const dispatch= useDispatch();
    const handleSearch=()=>{
       dispatch(searchActions.getItems(data))
    }
 
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
          <input onChange={(e)=>{setSearch(e.target.value)}} className="h-[34px] p-3 border-none w-[100%]" type="text" />
          <Link to="/search">
          <button className="bg-orange-300 px-2 h-[34px]" onClick={handleSearch}>
            <FaSearch className=" bg-orange-300" />
          </button>
          </Link>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col my-10 mx-4 text-white">
            <span className="text-[10px]">Hello Guest</span>
          </div>
          <Link to="/return&order">
            <div className="flex flex-col my-10 mx-4 text-white">
            <Link to="/login">
              <span className="text-[13px]">Sign In</span>
            </Link>
            </div>
          </Link>
          <div className="flex flex-col my-10 mx-4 text-white">
          <Link to="/signup">
              <span className="text-[13px]">Sign Up</span>
            </Link>
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
