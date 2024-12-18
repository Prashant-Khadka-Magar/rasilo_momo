import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/momo_logo.png";

function Navbar() {
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
            Cart
          </NavLink>
          <NavLink
            to="/user/0"
            className={({ isActive }) =>
              ` ${isActive ? "text-baseColor" : "text-black"} `
            }
          >
            Profile
          </NavLink>
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
