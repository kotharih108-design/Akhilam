import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function GalleryList() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmId, setConfirmId] = useState(null);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/akhilam/gallery`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    setConfirmId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    setShowConfirm(false);
    try {
      const response = await fetch(`${BASE_URL}/akhilam/gallery/${confirmId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      // Remove from state
      setImages(images.filter(img => img._id !== confirmId));
    } catch (err) {
      setErrorMessage(err.message);
      setShowError(true);
    }
  };

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
              key={img._id}
              className="bg-white border border-brandLight rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={img.image}
                alt={img.i_title}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />

              <h3 className="text-brandBlue font-semibold text-center mb-3">
                {img.i_title}
              </h3>

              <button
                onClick={() => handleDelete(img._id)}
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
              >
                <i className="fa-solid fa-trash mr-2"></i>
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* CONFIRMATION MODAL */}
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full mx-4">
              <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
              <p className="mb-6">Are you sure you want to delete this image?</p>
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
