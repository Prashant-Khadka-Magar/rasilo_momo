import React from "react";
import { IoMdClose } from "react-icons/io";

function Cart() {
  return (
    <div className="bg-gray-100">
      <div className="bg-white m-2 p-2">
        <h1 className="my-4">You have 1 item in the cart</h1>
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-between relative border-b-2 py-2">
            <div className="flex gap-x-4">
              <img
                src="https://i.ndtvimg.com/i/2016-04/momo_625x350_71461133236.jpg"
                alt="cart-img"
                className="max-sm:h-12 h-20"
              />

              <div>
                <div>Jhol Momo</div>
                <div>
                  Special Instruction: <br /> Spicy{" "}
                </div>
                <div className="flex gap-x-2 font-bold">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="absolute top-0 right-1">
                <IoMdClose />
              </button>
              <span className="items-center">$49.99</span>
            </div>
          </div>
        </div>
        <div className="text-end mt-8">
          <div>Subtotal: $49.99</div>
          <div>Delivery fee will be calculated in checkout</div>
          <button className="mt-4 bg-baseColor text-white px-2 py-1">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
