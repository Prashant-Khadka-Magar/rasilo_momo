import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#1F1F24] text-white mt-8 py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <div>
            <FaLocationDot className="text-baseColor mb-2" />
            <span>Address</span>
          </div>
          <div>
            Warden Ave at Lawrence Ave E, <br /> Scarborough, ON
          </div>
        </div>
        <div>
          <div>
            <FaPhoneAlt className="text-baseColor mb-2" />
            <span>Contacts</span>
          </div>
          <div>
            Phone: +1 647-676-2455
            <br /> Insta: Rasilo_momo
            <br /> Email: rasilomomo5plate@gmail.com
          </div>
        </div>
        <div>
          <div>
            <IoIosTime className="text-baseColor mb-2" />
            <span>Opening Hours</span>
          </div>
          <div>Open 24/7</div>
        </div>
        <div>
          <span>Follow Us</span>
          <div className="flex gap-2 mt-2">
            <div className="border rounded-full p-2 inline-block">
              <a
                href="https://www.facebook.com/profile.php?id=61569059197350"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </div>

            <div className="border rounded-full p-2 inline-block">
              <a href="https://www.instagram.com/rasilo_momo/" target="_blank">
                <AiFillInstagram />
              </a>
            </div>

            <div className="border rounded-full p-2 inline-block">
              <a href="https://www.tiktok.com/@rasilo_momo" target="_blank">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div>
        <div>
          &copy; 2024
          <span className="text-baseColor font-bold"> Rasilo Momo</span> All
          Rights Reserved
        </div>
        <div>
          Developed by 
          <a
            href="https://www.linkedin.com/in/prashantkhadkamagar/"
            target="_blank"
            className="text-baseColor font-bold  border-b-2 border-baseColor"
          >
             Prashant Khadka Magar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
