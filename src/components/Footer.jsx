import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[200px] flex items-center bg-black z-[100] sticky top-0">
      <Link to="/">
        <img
          className="w-[150px] h-[200px] object-contain mx-20 text-white"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="mx-20">
        <p className="text-white my-5">Home</p>
        <p className="text-white">About</p>
      </div>
      <div className="mx-20">
        <p className="text-white my-5">Contact Us</p>
        <p className="text-white"> Orders</p>
      </div>
    </div>
  );
};

export default Footer;
