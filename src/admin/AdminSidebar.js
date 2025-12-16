import { NavLink, useNavigate } from "react-router-dom";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    localStorage.removeItem("admin-user");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center px-3 py-2 rounded-md transition font-medium
     ${isActive ? "bg-brandOrange text-white" : "text-white hover:bg-white/10 hover:text-brandOrange"}`;

  return (
    <>
      {/* OVERLAY (Mobile Only) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-0"
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          bg-brandBlue text-white md:w-64 w-full p-6 pt-4 
          fixed md:static top-[152px] left-0 h-100 z-50
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-y-[1px]" : "-translate-y-[500px] md:translate-y-0"}
        `}
      >      
      <h2 className="text-2xl font-brand font-bold hidden md:block">Admin Panel</h2>

        <nav className="space-y-2" onClick={() => setSidebarOpen(false)}>
          <NavLink to="/admin" end className={linkClass}>
            <i className="fa-solid fa-gauge mr-2"></i> Dashboard
          </NavLink>

          <NavLink to="/admin/productlist" className={linkClass}>
            <i className="fa-solid fa-box mr-2"></i> Products
          </NavLink>

          <NavLink to="/admin/gallerylist" className={linkClass}>
            <i className="fa-solid fa-image mr-2"></i> Gallery
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-2 rounded-md transition font-medium text-white hover:bg-white/10 hover:text-brandOrange w-full text-left"
          >
            <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
          </button>
        </nav>
      </aside>
    </>
  );
}
