import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function AddGallery() {
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      setError("Please provide both title and image.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("i_title", title);
    formData.append("image", file);

    try {
      const response = await fetch(`${BASE_URL}/akhilam/gallery`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      // Success, redirect to gallery list
      navigate("/admin/gallerylist");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="p-6">
        <h1 className="text-2xl font-brand font-bold text-brandBlue mb-6">
          Add Gallery Image
        </h1>

        <div className="bg-white p-6 rounded-xl shadow border border-brandLight max-w-xl">

          {/* ERROR MESSAGE */}
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* IMAGE PREVIEW */}
            {preview && (
              <img
                src={preview}
                className="w-full h-52 object-cover rounded-md mb-4"
                alt="Preview"
              />
            )}

            <label className="block mb-2 font-medium">Image Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-brandLight p-2 rounded mb-4"
              placeholder="Enter Image Title"
              required
            />

            <label className="block mb-2 font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full border border-brandLight p-2 rounded mb-6"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-brandBlue text-white px-6 py-2 rounded hover:bg-brandOrange transition disabled:opacity-50"
            >
              {loading ? "Uploading..." : "Upload Image"}
            </button>
          </form>
        </div>
      </div>
  );
}
