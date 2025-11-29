import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GalleryList() {
  // Dummy gallery images
  const [images] = useState([
    {
      id: 1,
      src: "/images/products/anti collission device.jpeg",
      name: "Anti Collision Device",
    },
    {
      id: 2,
      src: "/images/products/c rail festoon system.jpeg",
      name: "C Rail Festoon System",
    },
    {
      id: 3,
      src: "/images/products/dsl shrouded busbar.jpeg",
      name: "DSL Shrouded Busbar",
    },
    {
      id: 4,
      src: "/images/products/master controller.jpeg",
      name: "Master Controller",
    },
    {
      id: 5,
      src: "/images/products/thruster brake.jpeg",
      name: "Thruster Brake",
    },
    {
      id: 6,
      src: "/images/products/rotary gear limit switch.jpeg",
      name: "Rotary Gear Limit Switch",
    },
  ]);

  return (
      <div className="p-6">

        {/* PAGE TITLE */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-brand font-bold text-brandBlue">
            Gallery Images
          </h1>

          <Link
            to="/admin/add-gallery"
            className="bg-brandBlue text-white px-5 py-2 rounded-lg hover:bg-brandOrange transition"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Add Image
          </Link>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white border border-brandLight rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />

              <h3 className="text-brandBlue font-semibold text-center mb-3">
                {img.name}
              </h3>

              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                <i className="fa-solid fa-trash mr-2"></i>
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
  );
}
