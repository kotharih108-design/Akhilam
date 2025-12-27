import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-300 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">

        {/* LEFT INFO */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <i className="fa-solid fa-location-dot text-brandOrange"></i>
            Ahmedabad, Gujarat, India
          </span>

          <span className="flex items-center gap-1">
            <i className="fa-regular fa-clock text-brandOrange"></i>
            Mon – Sat: 9:00 - 18:00
          </span>
        </div>

        {/* RIGHT CONTACT */}
        <div className="flex items-center gap-4 text-sm">
          <Link href="tel:+9197129 77761" className="flex items-center gap-1 hover:text-brandOrange">
            <i className="fa-solid fa-phone"></i>
            +91 97129 77761
         </Link>

          <Link href="mailto:akhilamindustries@gmail.com" className="flex items-center gap-1 hover:text-brandOrange">
            <i className="fa-solid fa-envelope"></i>
            akhilamindustries@gmail.com
         </Link>

          <div className="flex items-center gap-3 ml-2">
            <Link href="#" className="hover:text-brandOrange">
              <i className="fa-brands fa-facebook-f"></i>
           </Link>
            <Link href="#" className="hover:text-brandOrange">
              <i className="fa-brands fa-linkedin-in"></i>
           </Link>
            <Link href="#" className="hover:text-brandOrange">
              <i className="fa-brands fa-instagram"></i>
           </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
