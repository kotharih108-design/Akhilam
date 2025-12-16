import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../BASEURL";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${BASE_URL}/akhilam/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store authentication token
        localStorage.setItem("admin-auth", data.token || "true");
        localStorage.setItem("admin-user", JSON.stringify(data.user || { email: form.email }));
        navigate("/admin");
      } else {
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
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

          {/* ERROR MESSAGE */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

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
            disabled={loading}
            className="w-full bg-brandBlue hover:bg-brandOrange text-white py-2 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

      </div>

    </div>
  );
}
