import { useState } from "react";
import Breadcrumb from '../components/Breadcrumb'
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      name: "Anti Crane Collision Device",
      image: "/images/products/anti collission device.jpg",
      desc: "Safety device designed to prevent crane-to-crane and crane-to-end collisions, ensuring safe crane operation."
    },
    {
      name: "C-Rail Festoon System",
      image: "/images/products/c rail festoon system.jpg",
      desc: "High quality C-rail system for smooth cable management in moving crane and hoist systems."
    },
    {
      name: "DSL Shrouded Busbar",
      image: "/images/products/dsl shrouded busbar.jpg",
      desc: "Insulated DSL busbar system for safe and efficient power transfer in EOT cranes."
    },
    {
      name: "Master Controller",
      image: "/images/products/master controller.jpp",
      desc: "Durable master controller used for precise control in cranes and industrial machinery."
    },
    {
      name: "Rotary Gear Limit Switch",
      image: "/images/products/rotary gear limit switch.jpg",
      desc: "Heavy-duty rotary limit switch designed for accurate hoist and crane position control."
    },
    {
      name: "Thruster Brake",
      image: "/images/products/thruster brake.jpg",
      desc: "Powerful thruster brake unit for industrial cranes, providing reliable braking performance."
    },
    {
      name: "Wireless Radio Remote – Type 1",
      image: "/images/products/wireless radio remote 1.jpeg",
      desc: "Long-range wireless remote for easy and safe crane operation with multiple functions."
    },
    {
      name: "Wireless Radio Remote – Type 2",
      image: "/images/products/wireless radio remote 2.jpg",
      desc: " ergonomic remote system offering high reliability and user-friendly control buttons."
    }
  ];

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
                src={p.image}
                alt={p.name}
                className="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-center bg-brandOrange text-white p-2 text-lg font-semibold 
                          transition duration-200 group-hover:bg-brandBlue">
              {p.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-brandGrey px-4 py-3 text-center">
              {p.desc}
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
