import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // FRONTEND ONLY (No backend validation)
    // Backend developer will replace this with real API
    if (form.email && form.password) {
      localStorage.setItem("admin-auth", "true");
      navigate("/admin");
    }
  };

  return (
    <div className="py-10 flex items-center justify-center bg-brandLight px-4">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md border border-brandLight">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/images/logo/akhilam-logo.png" alt="Akhilam Logo" className="h-12" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-brand font-bold text-center text-brandBlue mb-6">
          Admin Login
        </h2>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-brandGrey text-sm font-medium">Email</label>
            <div className="flex items-center border border-brandLight rounded-lg px-3 mt-1">
              <i className="fa-solid fa-envelope text-brandGrey"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-2 py-2 outline-none font-body"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-brandGrey text-sm font-medium">Password</label>
            <div className="flex items-center border border-brandLight rounded-lg px-3 mt-1">
              <i className="fa-solid fa-lock text-brandGrey"></i>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-2 py-2 outline-none font-body"
                required
              />
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-brandBlue hover:bg-brandOrange text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

      </div>

    </div>
  );
}
