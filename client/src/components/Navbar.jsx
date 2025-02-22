import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/momo_logo.png";
import { useSelector } from "react-redux";

function Navbar() {
  const userInfo = useSelector((state) => state.auth.userInfo);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="flex justify-between items-center px-2 ">
        <div className="my-2">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="company_logo" className="h-12" />
            <span className="max-sm:hidden">Rasilo MoMo</span>
          </Link>
        </div>
        <div className=" flex justify-between items-center gap-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-baseColor" : "text-black"} `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              ` ${isActive ? "text-baseColor" : "text-black"} `
            }
          >
            <span className="relative">
              <p>Cart</p>
              <p className="text-s rounded-full absolute bg-baseColor text-white w-4 h-4 flex justify-center items-center right-[-10px] top-[-5px]">
                0
              </p>
            </span>
          </NavLink>
          {userInfo && userInfo.accountVerified ? (
            <NavLink
              to="/user"
              className={({ isActive }) =>
                ` ${isActive ? "text-baseColor" : "text-black"} `
              }
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                ` ${isActive ? "text-baseColor" : "text-black"} `
              }
            >
              Login
            </NavLink>
          )}

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              ` ${isActive ? "text-baseColor" : "text-black"} `
            }
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
