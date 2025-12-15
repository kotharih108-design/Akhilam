import { useState, useEffect } from "react";
import Breadcrumb from '../components/Breadcrumb'
import { Link } from "react-router-dom";
import BASE_URL from '../BASEURL.js';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/akhilam/public/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (<>

  <Breadcrumb />
    <div className="py-16 px-6 max-w-7xl mx-auto">

      {/* Page Title */}
      <h1 className="text-5xl font-brand font-bold text-brandBlue text-center mb-10">
        Our <span className="text-brandOrange">Products</span>
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((p, idx) => (
          <div
            key={idx}
            className="group bg-white border border-brandOrange  hover:border-brandBlue rounded-xl shadow-lg hover:shadow-2xl transition duration cursor-pointer"
          >
            {/* Product Image */}
            <div className="p-4 overflow-hidden">
              <img
                src={p.p_image}
                alt={p.p_name}
                className="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-center bg-brandOrange text-white p-2 text-lg font-semibold 
                          transition duration-200 group-hover:bg-brandBlue">
              {p.p_name}
            </h3>

            {/* Description */}
            <p className="text-sm text-brandGrey px-4 py-3 text-center">
              {p.p_description}
            </p>

            {/* Button */}
            {/* <div className="text-center pb-4 ">
              <Link
                to="/contact"
                className="mt-3 inline-block bg-brandBlue text-white px-4 py-2 rounded 
                           hover:bg-brandOrange transition"
              >
                Enquire Now
              </Link>
            </div> */}
          </div>
        ))}

      </div>
    </div>
    </>
  );
}
