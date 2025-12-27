import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faXmark, faBars, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import BASE_URL from '../BASEURL.js';

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

  const menuIcon = open ? faXmark : faBars;

    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/akhilam/public/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

 


  return (<>
 

    <nav className="fixed top-0 w-full bg-brandLight text-white shadow-lg font-body z-[9999]">
       <div className="w-full bg-brandBlue border-b border-gray-300 text-sm text-brandLight topper-nav">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
  
          {/* LEFT INFO */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
               <FontAwesomeIcon icon={faLocationDot} className="text-brandOrange" ></FontAwesomeIcon>
              Ahmedabad, Gujarat, India
            </span>
  
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="text-brandOrange" ></FontAwesomeIcon>
              Mon – Sat: 9:00 - 18:00
            </span>
          </div>
  
          {/* RIGHT CONTACT */}
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+9197129 77761" className="flex items-center gap-1 hover:text-brandOrange">
              
              <FontAwesomeIcon icon={faPhone} className="text-brandOrange" ></FontAwesomeIcon>
              +91 97129 77761
           </a>
  
            <a href="mailto:akhilamindustries@gmail.com" className="flex items-center gap-1 hover:text-brandOrange">
              
              <FontAwesomeIcon icon={faEnvelope} className="text-brandOrange" ></FontAwesomeIcon>
              akhilamindustries@gmail.com
           </a>
  
            <div className="flex items-center gap-3 ml-2">
              <Link to="/" className="hover:text-brandOrange">
                <FontAwesomeIcon icon={faFacebook} className="text-brandOrange" ></FontAwesomeIcon>
             </Link>
              <Link to="/" className="hover:text-brandOrange">
                <FontAwesomeIcon icon={faLinkedin} className="text-brandOrange" ></FontAwesomeIcon>
             </Link>
              <Link to="/" className="hover:text-brandOrange">
                <FontAwesomeIcon icon={faInstagram} className="text-brandOrange" ></FontAwesomeIcon>
             </Link>
            </div>
          </div>
  
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LOGO + NAME */}
        <Link to="/" >
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/akhilam-logo.png"
              alt="Akhilam Industries"
              className="h-16 w-auto"
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-md font-semibold tracking-wide text-brandOrange font-brand ">
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

          {/* <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition duration-150 ${isActive
                ? "text-brandBlue font-semibold border-b-2 border-brandOrange"
                : "text-brandGrey hover:text-brandOrange "
              }`
            }
          >
            Products
          </NavLink> */}

          <div className="relative group ">

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center gap-1 transition duration-200 ${isActive
                  ? "text-brandBlue font-semibold border-b border-brandOrange"
                  : "text-brandGrey hover:text-brandOrange"
                }`
              }
            >
              Products
              <i className="fa-solid fa-chevron-down text-xs mt-[2px]"></i>
            </NavLink>

            <div className="absolute left-0 top-full mt-3 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

              <div >
              {products.map((p, idx) => (
                <NavLink
                  key={idx}
                  to="/products"
                  // to={`/products/${p.slug}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src={p.p_image}
                    alt={p.p_name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {p.p_name}
                  </span>
                </NavLink>
              ))}
              </div>

            </div>
          </div>

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
            className="border border-brandOrange hover:bg-transparent bg-brandOrange/90 rounded-xl text-brandBlue px-6 py-2"
          >
            Contact
          </NavLink>

          <a
            href="/images/products/AKHILAM CATLOGUE.pdf" target="_blank" rel="noreferrer"
            className="border border-brandBlue hover:bg-transparent bg-brandBlue/90 rounded-xl text-brandOrange px-6 py-2"
          >
            Get Brochure
          </a>

          {/* <Link
            to="https://www.google.com/maps/place/Akhilam+Industries/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
          </Link> */}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-brandOrange focus:outline-none  "
          onClick={() => setOpen(!open)}
        >
          {/* <svg width="30" height="30" fill="currentColor">
            <path d="M4 7h22M4 15h22M4 23h22" />
          </svg> */}
          <FontAwesomeIcon icon={menuIcon} className="icon" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-[80px] inset-0 z-50 flex flex-col lg:hidden text-lg bg-brandBlue text-white py-4 px-6 pb-10 space-y-4">
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

          <a
            href="/images/products/AKHILAM CATLOGUE.pdf" target="_blank" rel="noreferrer"
            className="border border-brandBlue hover:bg-transparent bg-brandBlue/90 rounded-xl text-brandOrange px-6 py-2"
          >
            Get Brochure
          </a>

          <hr />

          <div className="mt-2 flex flex-col gap-2 font-brand">
            <h2>Contact Us :</h2>
            <Link to="tel:+91 97129 77761" target="_blank"
              rel="noopener noreferrer" className="text-brandOrange flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="border rounded-full border-brandOrange py-[10px] p-2 w-10" />
              <span>+91 97129 77761</span>
            </Link>
            <Link to="mailto:akhilamindustries@gmail.com" target="_blank"
              rel="noopener noreferrer" className="text-brandOrange flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="border rounded-full border-brandOrange py-[10px] p-2 w-10" />
              <span>akhilamindustries@gmail.com</span>
            </Link>
            <Link to="https://maps.app.goo.gl/xR2eveC552a7iwzU7" target="_blank"
              rel="noopener noreferrer" className="text-brandOrange flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="border rounded-full border-brandOrange py-[10px] p-2 w-10" />
              <span>Vatva, Ahmedabad.</span>
            </Link>
          </div>

          <hr />

          <div className="mt-2 flex flex-col gap-2 font-brand">
            <h2>Social Media :</h2>

            <div className="flex gap-2">

              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FontAwesomeIcon icon={faInstagram} className="social" />
              </Link>
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FontAwesomeIcon icon={faFacebook} className="social" />
              </Link>
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FontAwesomeIcon icon={faLinkedin} className="social" />
              </Link>
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FontAwesomeIcon icon={faTwitter} className="social" />
              </Link>

            </div>
          </div>
        </div>
      )}
    </nav>
    </>);
}
