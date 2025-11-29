import React, { useState } from "react";

export default function AddGallery() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
      <div className="p-6">
        <h1 className="text-2xl font-brand font-bold text-brandBlue mb-6">
          Add Gallery Image
        </h1>

        <div className="bg-white p-6 rounded-xl shadow border border-brandLight max-w-xl">

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
            className="w-full border border-brandLight p-2 rounded mb-4"
            placeholder="Enter Image Title"
          />

          <label className="block mb-2 font-medium">Upload Image</label>
          <input
            type="file"
            className="w-full border border-brandLight p-2 rounded mb-6"
            onChange={handleImage}
          />

          <button className="bg-brandBlue text-white px-6 py-2 rounded hover:bg-brandOrange transition">
            Upload Image
          </button>
        </div>
      </div>
  );
}
