"use client";

import { useRouter } from "next/navigation";

import {
  FaHospital,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const getRoleColor = () => {
    switch (user?.role) {
      case "admin":
        return "bg-purple-100 text-purple-700";

      case "doctor":
        return "bg-blue-100 text-blue-700";

      case "patient":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <FaHospital
            size={30}
            className="text-blue-600"
          />

          <div>
            <h1 className="font-bold text-xl text-gray-800">
              Hospital Management System
            </h1>

            <p className="text-xs text-gray-500">
              Healthcare Administration Portal
            </p>
          </div>
        </div>

        {/* User Section */}
        {user && (
          <div className="flex items-center gap-4">
            <FaUserCircle
              size={35}
              className="text-gray-500"
            />

            <div className="text-right">
              <p className="font-semibold text-gray-800">
                {user.name}
              </p>

              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${getRoleColor()}`}
              >
                {user.role.toUpperCase()}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}