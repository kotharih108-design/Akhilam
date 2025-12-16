import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function AddProduct() {
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleImagePreview = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !file) {
      setError("Please provide name, description, and image.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("p_name", name);
    formData.append("p_description", description);
    formData.append("p_image", file);

    try {
      const response = await fetch(`${BASE_URL}/akhilam/products`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add product: ${response.status} ${errorText}`);
      }

      navigate("/admin/productlist");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-brand font-bold text-brandBlue mb-6">
        Add New Product
      </h1>

      {/* FORM CARD */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-brandLight">

        {/* ERROR MESSAGE */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PRODUCT NAME */}
          <div className="flex flex-col">
            <label className="font-medium text-brandGrey mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="border border-brandLight rounded-lg px-4 py-2 focus:outline-brandBlue"
              required
            />
          </div>

          {/* LONG DESCRIPTION */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-brandGrey mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              placeholder="Write detailed product description"
              className="border border-brandLight rounded-lg px-4 py-2 focus:outline-brandBlue"
              required
            ></textarea>
          </div>

          {/* IMAGE UPLOAD */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-brandGrey mb-1">Product Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImagePreview}
              className="border border-brandLight rounded-lg px-3 py-2"
              required
            />

            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-4 h-40 object-contain border border-brandLight rounded-lg p-2"
              />
            )}
          </div>

        </form>

        {/* SUBMIT BUTTON */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-brandBlue hover:bg-brandOrange text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>

      </div>
    </div>
  );
}
