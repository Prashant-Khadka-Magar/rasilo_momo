import React from "react";
import "../styles/Home.css";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";

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

      <div className="mt-8">
        <h1 className="text-center text-6xl">OUR MENU</h1>

        <h2 className="text-center text-4xl mt-4">CHECK OUT YUMMY MENU</h2>

        <div className="mt-8">
          <div className="">
            <div className="flex gap-x-5 justify-center text-xl">
              <button className="border-b-4 pb-1 border-baseColor ">
                Chicken Momo
              </button>
              <button className="border-b-4 border-gray pb-1">Veg Momo</button>
              <button className="border-b-4 border-gray pb-1">Sides</button>
              <button className="border-b-4 border-gray pb-1">Pop</button>
            </div>
          </div>

          <div className="dynamicMenus m-4 ">
            <h1 className="text-center my-8">Chicken Momo</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {/* Card 1 */}
              <div className="chickenmomo border border-black p-4 bg-white">
                <div className="relative">
                  <img
                    src="https://redhousespice.com/wp-content/uploads/2021/02/uncooked-dumplings-on-a-tray-scaled.jpeg"
                    alt="Chicken Momo"
                    className="h-64 w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 bg-baseColor text-white px-4 py-1">
                    $9.99
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="">
                      <div className="text-xl font-bold">Steam Momo</div>
                      {/* <div className="text-sm">Comes with Achar</div> */}
                      <div className="flex items-center text-yellow-500">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <FaStarHalfAlt />
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

              <div className="chickenmomo border border-black p-4 bg-white">
                <div className="relative">
                  <img
                    src="https://mrsgrg.wordpress.com/wp-content/uploads/2015/01/img_0785-0.jpg?w=1200"
                    alt="Chicken Momo"
                    className="h-64 w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 bg-baseColor text-white px-4 py-1">
                    $12.99
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="">
                      <div className="text-xl font-bold">Jhol Momo</div>
                      {/* <div className="text-sm">
                        Comes with Jhol and hot sauce
                      </div> */}
                      <div className="flex items-center text-yellow-500">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
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

              <div className="chickenmomo border border-black p-4 bg-white">
                <div className="relative">
                  <img
                    src="https://static.toiimg.com/thumb/53281477.cms?imgsize=1884587&width=800&height=800"
                    alt="Chicken Momo"
                    className="h-64 w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 bg-baseColor text-white px-4 py-1">
                    $12.99
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="">
                      <div className="text-xl font-bold">Fry Momo</div>
                      {/* <div className="text-sm">Comes with Achar</div> */}
                      <div className="flex items-center text-yellow-500">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStarHalfAlt />
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
            </div>

            {/* <div className="chickenmomo">
              <div>
                <img
                  src="https://redhousespice.com/wp-content/uploads/2021/02/uncooked-dumplings-on-a-tray-scaled.jpeg"
                  alt=""
                  className="h-64"
                />
                <div className="">
                  <div className="flex">
                    <h1 className="text-xl"> Chicken Momo</h1>
                    <button  className="bg-baseColor text-white px-2">View Details</button>
                  </div>
                  <div className="flex">
                    <div className="flex gap-x-2">
                      <button className="bg-baseColor text-white px-2">+</button>
                      <span>1</span>
                      <button  className="bg-baseColor text-white px-2">-</button>
                    </div>
                    <button  className="bg-baseColor text-white px-2">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
