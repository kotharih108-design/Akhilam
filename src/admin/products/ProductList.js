import React from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = [
    {
      _id: "1",
      name: "Wireless Radio Remote",
      image: "/images/products/wireless radio remote 1.jpeg",
      description: "Remote lorem12 dsbjsf fsbf fisbf Fsifb FUfs fuFJ IUFjbfjAF  sifuHFhfo FUshfFObf hfouHFanfouNF OHFOihfNF fouHFIOh",
    },
    {
      _id: "2",
      name: "Master Controller",
      image: "/images/products/master controller.jpg",
      description: "Controller",
    },
    {
      _id: "3",
      name: "DSL Shrouded Busbar",
      image: "/images/products/dsl shrouded busbar.jpg",
      description: "Busbar",
    },
    {
      _id: "4",
      name: "C-Rail Festoon System",
      image: "/images/products/c rail festoon system.jpg",
      description: "Festoon",
    },
  ];

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
          <i className="fa-solid fa-plus"></i> Add New Product
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
                src={prod.image}
                className="h-16 w-16 object-cover rounded-lg border"
                alt={prod.name}
              />
              <div>
                <h3 className="text-brandBlue font-semibold">{prod.name}</h3>
                <p className="text-brandGrey text-sm">{prod.description}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="absolute right-3 bottom-1 flex justify-end gap-2 mt-4 text-lg">
              <Link
                to={`/admin/edit-product/${prod._id}`}
                className="bg-brandLight p-1 text-brandBlue hover:text-brandOrange transition"
              >
                <i className="fa-solid fa-pen"></i>
              </Link>

              <button
                className=" bg-brandLight p-1 text-red-500 hover:text-red-700 transition"
                onClick={() => alert("Delete logic will be added by backend")}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}

      </div>



    </div>
  );
}
