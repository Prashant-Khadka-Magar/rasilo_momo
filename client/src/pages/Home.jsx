import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import Menu from "./Menu.jsx";

export default function Home() {

  return (
    <div className=" bg-cover bg-center">
      <div
        id="homeMain"
        className="text-white flex justify-center items-center"
      >
        <div className="text-center">
          <div className="text-6xl">Rasilo Momo</div>
          <div className="text-2xl">Taste like never before</div>
          <button className="bg-baseColor px-8 py-2 mt-4 font-extrabold">
            Order Now
          </button>
        </div>
      </div>

      <div className="services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mt-8">
        <div className="text-center p-2 bg-baseColor text-white py-4">
          <FaHome className="text-4xl mx-auto mb-4" />
          <h2 className="font-bold text-lg">Master Chefs</h2>
          <p>
            Our chefs handcraft every food with love, using traditional
            techniques and the freshest ingredients for that authentic taste you
            crave.
          </p>
        </div>

        <div className="text-center p-2 bg-baseColor text-white py-4">
          <ImSpoonKnife className="text-4xl mx-auto mb-4 " />
          <h2 className="font-bold text-lg">Quality Food</h2>
          <p>
            Fresh, delicious, and packed with flavor—because you deserve nothing
            but the best in every bite.
          </p>
        </div>

        <div className="text-center p-2 bg-baseColor text-white py-4">
          <FaCartPlus className="text-4xl mx-auto mb-4" />
          <h2 className="font-bold text-lg">Online Order</h2>
          <p>
            Easy and hassle-free ordering at your fingertips. Just a few clicks,
            and your meal is on its way!
          </p>
        </div>

        <div className="text-center p-2 bg-baseColor text-white py-4">
          <RiCustomerService2Line className="text-4xl mx-auto mb-4" />
          <h2 className="font-bold text-lg">Delivery Service</h2>
          <p>
            Prompt and reliable delivery right to your door, whenever you need
            it— rain or shine!
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
}
