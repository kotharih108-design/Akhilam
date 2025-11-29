import React, { useState } from "react";
import AdminLayout from "../AdminLayout";
import { useParams } from "react-router-dom";

export default function EditGallery() {
  const { id } = useParams();

  const [preview] = useState("/mnt/data/c rail festoon system.jpeg");

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-brand font-bold text-brandBlue mb-6">
          Edit Gallery Image
        </h1>

        <div className="bg-white p-6 rounded-xl shadow border border-brandLight max-w-xl">

          <img src={preview} className="w-full h-52 rounded-md mb-4" />

          <label className="block mb-2 font-medium">Image Title</label>
          <input
            type="text"
            defaultValue="C-Rail Festoon System"
            className="w-full border border-brandLight p-2 rounded mb-4"
          />

          <label className="block mb-2 font-medium">Change Image</label>
          <input
            type="file"
            className="w-full border border-brandLight p-2 rounded mb-6"
          />

          <button className="bg-brandBlue text-white px-6 py-2 rounded hover:bg-brandOrange transition">
            Update Image
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
