import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    p_name: "",
    p_description: "",
    p_image: "",
  });
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${BASE_URL}/akhilam/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setPreview(data.p_image);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError(null);

    const formData = new FormData();
    formData.append("p_name", product.p_name);
    formData.append("p_description", product.p_description);
    if (file) {
      formData.append("p_image", file);
    }

    try {
      const response = await fetch(`${BASE_URL}/akhilam/products/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update product: ${response.status} ${errorText}`);
      }

      navigate("/admin/productlist");
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6">Error: {error}</div>;

  return (
    <div className="p-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-brand font-bold text-brandBlue mb-6">
        Edit Product
      </h1>

      {/* FORM CONTAINER */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-brandLight">

        {/* ERROR MESSAGE */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

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
                value={product.p_name}
                onChange={(e) => setProduct({ ...product, p_name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg border-brandLight focus:outline-brandBlue"
                required
              />

              {/* Description */}
              <label className="block mt-5 mb-2 text-brandGrey font-medium">
                Description
              </label>
              <textarea
                value={product.p_description}
                onChange={(e) => setProduct({ ...product, p_description: e.target.value })}
                rows="6"
                className="w-full px-4 py-2 border rounded-lg border-brandLight focus:outline-brandBlue"
                required
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
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded-lg border-brandLight bg-white cursor-pointer"
              />

            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 mt-8">

            {/* CANCEL */}
            <button
              type="button"
              onClick={() => navigate("/admin/productlist")}
              className="px-6 py-2 rounded-lg border border-brandGrey text-brandGrey hover:bg-brandGrey hover:text-white transition"
            >
              Cancel
            </button>

            {/* UPDATE */}
            <button
              type="submit"
              disabled={updating}
              className="px-6 py-2 rounded-lg bg-brandBlue text-white hover:bg-brandOrange transition disabled:opacity-50"
            >
              {updating ? "Updating..." : "Update Product"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
