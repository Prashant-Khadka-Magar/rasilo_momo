import React from "react";

function NotFound() {
  return (
    <div className="px-4 flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold text-baseColor">404</h1>
      <p className="mt-4 text-lg">
        Uh-oh! It seems like you've lost your way in the momo steam!
      </p>
      <img
        src="https://i.ndtvimg.com/i/2016-04/momo_625x350_71461133236.jpg" // Replace with your momo image path
        alt="Steaming Momos"
        className="w-64 mt-6"
      />
      <p className="mt-4 text-base text-center">
        Don't worry! While you're here, why not{" "}
        <a href="/cart" className="text-baseColor underline">
          check your cart
        </a>
        or go back to the{" "}
        <a href="/" className="text-baseColor underline">
          home page
        </a>{" "}
        to explore more delicious momos?
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-2 text-white bg-baseColor hover:bg-red-600 rounded-lg shadow-lg transition-all"
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
