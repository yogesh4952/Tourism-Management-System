import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", username, password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://unsplash.com/photos/a-view-of-a-mountain-range-with-snow-capped-mountains-in-the-distance-mjor7XfDYJs')`,
      }}
    >
      {/* Overlay to make the background slightly transparent */}
      <div className="absolute inset-0 bg-grey bg-opacity-50"></div>

      {/* Login Form */}
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-96 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-400 text-gray-900 font-semibold py-2 rounded-lg shadow-lg transition-all">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-400">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}