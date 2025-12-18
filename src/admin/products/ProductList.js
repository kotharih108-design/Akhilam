import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../BASEURL";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmId, setConfirmId] = useState(null);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/akhilam/public/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    setConfirmId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    setShowConfirm(false);
    try {
      const response = await fetch(`${BASE_URL}/akhilam/products/${confirmId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      // Remove from state
      setProducts(products.filter(prod => prod._id !== confirmId));
    } catch (err) {
      setErrorMessage(err.message);
      setShowError(true);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6">Error: {error}</div>;

  return (
    <div className="p-6">

      {/* PAGE TITLE ROW */}
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-brand font-bold text-brandBlue">
          Product List
        </h1>

        <Link
          to="/admin/add-product"
          className="bg-brandBlue text-white px-4 py-2 rounded-md hover:bg-brandOrange transition flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPlus} /> Add New Product
        </Link>
      </div>

     

      {/* MOBILE CARD VIEW */}
      <div className="grid grid-cols-1 gap-4">

        {products.map((prod) => (
          <div
            key={prod._id}
            className="relative bg-white shadow-md border border-brandLight rounded-xl p-4"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              <img
                src={prod.p_image}
                className="h-16 w-16 object-cover rounded-lg border"
                alt={prod.p_name}
              />
              <div>
                <h3 className="text-brandBlue font-semibold">{prod.p_name}</h3>
                <p className="text-brandGrey text-sm">{prod.p_description}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="absolute right-3 bottom-1 flex justify-end gap-2 mt-4 text-lg">
              <Link
                to={`/admin/edit-product/${prod._id}`}
                className="bg-brandLight p-1 text-brandBlue hover:text-brandOrange transition"
              >
                <FontAwesomeIcon icon={faPen} />
              </Link>

              <button
                onClick={() => handleDelete(prod._id)}
                className=" bg-brandLight p-1 text-red-500 hover:text-red-700 transition"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* CONFIRMATION MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-6">Are you sure you want to delete this product?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {showError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold mb-4">Error</h2>
            <p className="mb-6">{errorMessage}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowError(false)}
                className="px-4 py-2 bg-brandBlue text-white rounded hover:bg-brandOrange transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
