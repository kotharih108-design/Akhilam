import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (<>
     {/* PAGE CONTENT */}
      <div className="p-6">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-brand font-bold text-brandBlue mb-8">
          Admin Dashboard
        </h1>

        {/* ======= TOP CARDS ======= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* TOTAL PRODUCTS */}
          <Link to="/admin/productlist">
            <div className="group bg-white shadow-md rounded-xl p-6 border border-brandLight flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
              <div className="bg-brandBlue text-white p-4 rounded-lg group-hover:scale-110 transition">
                <i className="fa-solid fa-box text-2xl"></i>
              </div>
              <div>
                <p className="text-brandGrey text-sm">Total Products</p>
                <h2 className="text-xl font-semibold">7</h2>
              </div>
            </div>
          </Link>

          {/* GALLERY IMAGES */}
          <div className="group bg-white shadow-md rounded-xl p-6 border border-brandLight flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
            <div className="bg-brandOrange text-white p-4 rounded-lg group-hover:scale-110 transition">
              <i className="fa-solid fa-image text-2xl"></i>
            </div>
            <div>
              <p className="text-brandGrey text-sm">Gallery Images</p>
              <h2 className="text-xl font-semibold">120</h2>
            </div>
          </div>

          {/* ADMIN USERS */}
          <div className="group bg-white shadow-md rounded-xl p-6 border border-brandLight flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
            <div className="bg-brandGrey text-white p-4 rounded-lg group-hover:scale-110 transition">
              <i className="fa-solid fa-users text-2xl"></i>
            </div>
            <div>
              <p className="text-brandGrey text-sm">Admin Users</p>
              <h2 className="text-xl font-semibold">3</h2>
            </div>
          </div>

        </div>

        {/* ======= BOTTOM OVERVIEW BOX ======= */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-10 border border-brandLight">
          <h2 className="text-lg font-semibold text-brandBlue mb-3">
            Quick Overview
          </h2>
          <p className="text-brandGrey leading-relaxed">
            Welcome to your admin panel. Use the sidebar to manage products,
            gallery images, and update website content. This dashboard provides
            a quick snapshot of important activity and system information.
          </p>
        </div>

      </div> </>
  );
}
