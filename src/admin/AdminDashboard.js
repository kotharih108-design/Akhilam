import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BASE_URL from "../BASEURL";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faImage } from '@fortawesome/free-solid-svg-icons';

export default function AdminDashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalGallery, setTotalGallery] = useState(0);

  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/akhilam/public/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setTotalProducts(data.length);
      } catch (err) {
        console.error(err);
        // Optionally set to 0 or show error
      }
    };

    fetchTotalProducts();
  }, []);

  useEffect(() => {
    const fetchTotalGallery = async () => {
      try {
        const response = await fetch(`${BASE_URL}/akhilam/gallery`);
        if (!response.ok) {
          throw new Error('Failed to fetch gallery');
        }
        const data = await response.json();
        setTotalGallery(data.length);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTotalGallery();
  }, []);

  return (<>
     {/* PAGE CONTENT */}
      <div className="p-6">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-brand font-bold text-brandBlue mb-8">
          Admin Dashboard
        </h1>

        {/* ======= TOP CARDS ======= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          {/* TOTAL PRODUCTS */}
          <Link to="/admin/productlist">
            <div className="group bg-white shadow-md rounded-xl p-6 border border-brandLight flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
              <div className="bg-brandBlue text-white p-4 rounded-lg group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faBox} className="text-2xl" />
              </div>
              <div>
                <p className="text-brandGrey text-sm">Total Products</p>
                <h2 className="text-xl font-semibold">{totalProducts}</h2>
              </div>
            </div>
          </Link>

          {/* GALLERY IMAGES */}
          <Link to="/admin/gallerylist"> 
          <div className="group bg-white shadow-md rounded-xl p-6 border border-brandLight flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
            <div className="bg-brandOrange text-white p-4 rounded-lg group-hover:scale-110 transition">
              <FontAwesomeIcon icon={faImage} className="text-2xl" />
            </div>
            <div>
              <p className="text-brandGrey text-sm">Gallery Images</p>
              <h2 className="text-xl font-semibold">{totalGallery}</h2>
            </div>
          </div>
          </Link>

          {/* ADMIN USERS */}
          {/* <div className="group bg-white shadow-md rounded-xl p-6 border border-brandLight flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
            <div className="bg-brandGrey text-white p-4 rounded-lg group-hover:scale-110 transition">
              <i className="fa-solid fa-users text-2xl"></i>
            </div>
            <div>
              <p className="text-brandGrey text-sm">Admin Users</p>
              <h2 className="text-xl font-semibold">3</h2>
            </div>
          </div> */}

        </div>

        {/* ======= BOTTOM OVERVIEW BOX ======= */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-10 border border-brandLight">
          <h2 className="text-lg font-semibold text-brandBlue mb-3">
            Quick Overview
          </h2>
          <p className="text-brandGrey leading-relaxed">
            Welcome to your admin panel. Use the sidebar to manage products,
            gallery images, and update website content. This dashboard provides
            a quick snapshot of important activity and system information.
          </p>
        </div>

      </div> </>
  );
}
