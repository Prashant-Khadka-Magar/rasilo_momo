import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import {
  useGetAllCategoriesQuery,
  useProductByCategoryQuery,
} from "@/redux/features/product/productApi.js";
import { Skeleton } from "@/components/ui/skeleton";

function Menu() {
  let [activeCategory, setActiveCategory] = useState(
    "6793c15b9f9ffa49d3711812"
  );
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);

  const { data: categories, isLoading: categoryLoading } =
    useGetAllCategoriesQuery();

  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useProductByCategoryQuery({
    categoryId: activeCategory,
    page,
    limit,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-8">
      <h1 className="text-center text-6xl">OUR MENU</h1>

      <h2 className="text-center text-4xl mt-4">CHECK OUT YUMMY MENU</h2>

      <div className="mt-8 max-w-screen">
        <div className="overflow-x-auto px-2">
          <div className="flex gap-x-5 md:justify-center justify-start text-xl whitespace-nowrap">
            {categories &&
              categories.map((item) => (
                <button
                  onClick={() => setActiveCategory(item._id)}
                  key={item._id}
                  className={`border-b-4 pb-1 ${
                    activeCategory === item._id
                      ? "border-baseColor"
                      : "border-gray-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
          </div>
        </div>

        <div className="dynamicMenus m-4 ">
          <h1 className="text-center my-8">
            {products && products.category.toLocaleUpperCase()}'s Menu
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.items.map((item) => {
              return (
                <div
                  key={item._id}
                  className="chickenmomo border border-black p-4 bg-white"
                >
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-64 w-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 bg-baseColor text-white px-4 py-1">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="">
                        <div className="text-xl font-bold">{item.name}</div>
                        <div className="flex items-center text-yellow-500">
                          <FaStar /> <FaStar /> <FaStar />
                          <FaStarHalfAlt /> <FaRegStar />
                        </div>
                      </h1>
                      <button className="bg-baseColor text-white px-3 py-1 hover:bg-opacity-90">
                        View Details
                      </button>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center gap-x-2">
                        <button className="bg-baseColor text-white px-2 py-1  hover:bg-opacity-90">
                          -
                        </button>
                        <span className="text-lg">1</span>
                        <button className="bg-baseColor text-white px-2 py-1 hover:bg-opacity-90">
                          +
                        </button>
                      </div>
                      <button className="bg-baseColor text-white px-4 py-1  hover:bg-opacity-90">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
