import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

const Search = () => {
  const data = useSelector((state) => state.search.itemList);
  console.log(data)
  return (
    <>
      {data.length ? (
        <div>
          {data?.map((item) => (
            <ProductList data={item} />
          ))}
        </div>
      ) : (
        <div className=" w-[90%] h-[200px] border border-gray-300 m-20">
          <p className="text-center m-10 font-bold text-3xl">
            No Results Found
          </p>
        </div>
      )}
    </>
  );
};

export default Search;
