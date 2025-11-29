import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProduct() {

     const navigate = useNavigate();
  // Demo product to edit (backend will replace this later)
  const [product, setProduct] = useState({
    name: "Wireless Radio Remote",
    category: "Remote Control",
    description:
      "High-performance industrial wireless remote for crane and hoist control.",
    image: "/mnt/data/wireless radio remote 1.jpeg",
  });

  const [preview, setPreview] = useState(product.image);

  // Handle File Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-brand font-bold text-brandBlue mb-6">
        Edit Product
      </h1>

      {/* FORM CONTAINER */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-brandLight">

        {/* GRID FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div>
            {/* Product Name */}
            <label className="block mb-2 text-brandGrey font-medium">
              Product Name
            </label>
            <input
              type="text"
              value={product.name}
              className="w-full px-4 py-2 border rounded-lg border-brandLight focus:outline-brandBlue"
            />

           

            {/* Description */}
            <label className="block mt-5 mb-2 text-brandGrey font-medium">
              Description
            </label>
            <textarea
              value={product.description}
              rows="6"
              className="w-full px-4 py-2 border rounded-lg border-brandLight focus:outline-brandBlue"
            ></textarea>
          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* Image Preview */}
            <label className="block mb-2 text-brandGrey font-medium">
              Product Image
            </label>

            <img
              src={preview}
              alt="Preview"
              className="w-full h-56 object-contain rounded-lg border border-brandLight shadow mb-3"
            />

            {/* Upload Input */}
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded-lg border-brandLight bg-white cursor-pointer"
            />

          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-8">

          {/* CANCEL */}
          <button className="px-6 py-2 rounded-lg border border-brandGrey text-brandGrey hover:bg-brandGrey hover:text-white transition"  onClick={() => navigate("/admin/productlist")}>
            Cancel
          </button>

          {/* UPDATE */}
          <button className="px-6 py-2 rounded-lg bg-brandBlue text-white hover:bg-brandOrange transition"  onClick={() => navigate("/admin/productlist")}>
            Update Product
          </button>

        </div>

      </div>
    </div>
  );
}
