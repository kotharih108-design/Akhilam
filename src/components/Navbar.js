import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

    useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";    // Disable scroll

    } else {
      document.body.style.overflow = "auto";      // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto";      // Cleanup when unmount
    };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full bg-brandLight text-white shadow-lg font-body z-[9999]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo/akhilam-logo.png"
            alt="Akhilam Industries"
            className="h-16 w-auto"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-md font-semibold tracking-wide text-brandOrange font-brand ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandBlue font-semibold border-b-2 border-brandOrange"
                : "text-brandGrey hover:text-brandOrange"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandBlue font-semibold border-b-2 border-brandOrange"
                : "text-brandGrey hover:text-brandOrange"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandBlue font-semibold border-b-2 border-brandOrange"
                : "text-brandGrey hover:text-brandOrange"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandBlue font-semibold border-b-2 border-brandOrange"
                : "text-brandGrey hover:text-brandOrange"
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandBlue font-semibold border-b-2 border-brandOrange"
                : "text-brandGrey hover:text-brandOrange"
              }`
            }
          >
            Contact
          </NavLink>

          <a
            href="https://www.google.com/maps/place/Akhilam+Industries/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <i className="fa-solid fa-location-dot icon"></i>
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-brandOrange focus:outline-none "
          onClick={() => setOpen(!open)}
        >
          {/* <svg width="30" height="30" fill="currentColor">
            <path d="M4 7h22M4 15h22M4 23h22" />
          </svg> */}
          <i className={`fa-solid fa-${open ? "xmark" : "bars"} icon`}></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-[80px] inset-0 z-50 flex flex-col md:hidden text-lg bg-brandBlue text-white py-4 px-6 pb-10 space-y-4">
          <NavLink 
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandOrange font-semibold border-b-2 border-brandOrange mr-[50%]"
                : "text-white hover:text-brandOrange"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandOrange font-semibold border-b-2 border-brandOrange mr-[50%]"
                : "text-white hover:text-brandOrange"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandOrange font-semibold border-b-2 border-brandOrange mr-[50%]"
                : "text-white hover:text-brandOrange"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandOrange font-semibold border-b-2 border-brandOrange mr-[50%]"
                : "text-white hover:text-brandOrange"
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandOrange font-semibold border-b-2 border-brandOrange mr-[50%]"
                : "text-white hover:text-brandOrange"
              }`
            }
          >
            Contact
          </NavLink>

          <hr />

          <div className="mt-2 flex flex-col gap-2 font-brand">
            <h2>Contact Us :</h2>
            <a href="tel:+91 99984 88480" target="_blank"
              rel="noopener noreferrer" className="text-brandOrange flex items-center gap-2">
              <i className="fa-solid fa-phone border rounded-full border-brandOrange py-[10px] p-2 w-10"></i>
              <span>+91 99984 88480</span>
            </a>
            <a href="mailto:support@apnawebx.com" target="_blank"
              rel="noopener noreferrer" className="text-brandOrange flex items-center gap-2">
              <i className="fa-solid fa-envelope border rounded-full border-brandOrange py-[10px] p-2 w-10"></i>
              <span>support@apnawebx.com</span>
            </a>
            <a href="https://maps.app.goo.gl/xR2eveC552a7iwzU7" target="_blank"
              rel="noopener noreferrer" className="text-brandOrange flex items-center gap-2">
              <i className="fa-solid fa-location-dot border rounded-full border-brandOrange py-[10px] p-2 w-10"></i>
              <span>Ahmedabad, Gujarat</span>
            </a>
          </div>

          <hr />

          <div className="mt-2 flex flex-col gap-2 font-brand">
            <h2>Social Media :</h2>

            <div className="flex gap-2">
              
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <i className="fa-brands fa-instagram social "></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <i className="fa-brands fa-facebook social "></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <i className="fa-brands fa-linkedin social "></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <i className="fa-brands fa-twitter social "></i>
            </a>
            
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
