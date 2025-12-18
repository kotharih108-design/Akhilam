import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuIcon = sidebarOpen ? faXmark : faBars;

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("admin-auth");
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
  }, [navigate]);

   // 🔥 Disable scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"; // Stop scrolling
    } else {
      document.body.style.overflow = "auto";   // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto";   // Cleanup
    };
  }, [sidebarOpen]);

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-26 left-0 w-full flex justify-between items-center p-4 shadow bg-brandBlue text-brandLight border-b-2 border-brandOrange z-[9999]">

          <h1 className="font-brand font-bold text-2xl ">Admin Panel</h1>

          {/* Mobile Toggle Button */}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="border p-[2px]">
            <FontAwesomeIcon icon={menuIcon} className="text-2xl" />
          </button>
        </div>
            <div className="mt-16 md:mt-2">

        <Outlet />
            </div>
      </div>
    </div>
  );
}
