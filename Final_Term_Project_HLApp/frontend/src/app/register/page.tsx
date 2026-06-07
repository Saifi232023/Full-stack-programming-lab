"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

import API from "@/services/api";

export default function RegisterPage() {
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
role: "patient",
});

const handleChange = (
e: React.ChangeEvent<HTMLInputElement>
) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleRoleChange = (role: string) => {
setFormData({
...formData,
role,
});
};

const handleSubmit = async (
e: React.FormEvent
) => {
e.preventDefault();
setLoading(true);


try {
  await API.post(
    "/auth/register",
    formData
  );

  toast.success(
    "Registration Successful"
  );
} catch (error) {
  toast.error(
    "Registration Failed"
  );
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-6"> <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">


    <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-600 to-teal-500 text-white p-12">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">
            🏥
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              HMS
            </h1>

            <p className="text-blue-100">
              Hospital Management System
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold leading-tight mb-5">
          Join the Future of Healthcare Management
        </h2>

        <p className="text-blue-100 text-lg">
          Create your account and gain access to a modern healthcare platform designed for hospitals, doctors, and patients.
        </p>
      </div>

      <div className="space-y-4 mt-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          ✓ Secure Authentication & Access Control
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          ✓ Appointment Scheduling & Tracking
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          ✓ Digital Prescriptions & Treatments
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          ✓ Real-Time Notifications
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <h3 className="text-2xl font-bold">
          
          </h3>
          <p className="text-sm">
            Doctors
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <h3 className="text-2xl font-bold">
          
          </h3>
          <p className="text-sm">
            Patients
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <h3 className="text-2xl font-bold">
           
          </h3>
          <p className="text-sm">
            Secure
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center p-8 lg:p-12">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800">
            Create Account
          </h2>

          <p className="text-slate-500 mt-2">
            Start managing healthcare with HMS
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-xs text-slate-500 mt-2">
              Use a secure password for your account.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Select Your Role
            </label>

            <div className="grid grid-cols-3 gap-3">

              <button
                type="button"
                onClick={() => handleRoleChange("patient")}
                className={`p-4 rounded-xl border transition-all ${
                  formData.role === "patient"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-slate-300 hover:border-blue-300"
                }`}
              >
                <div className="text-lg mb-1">
                  👤
                </div>
                <div className="font-medium">
                  Patient
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange("doctor")}
                className={`p-4 rounded-xl border transition-all ${
                  formData.role === "doctor"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-slate-300 hover:border-blue-300"
                }`}
              >
                <div className="text-lg mb-1">
                  👨‍⚕️
                </div>
                <div className="font-medium">
                  Doctor
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange("admin")}
                className={`p-4 rounded-xl border transition-all ${
                  formData.role === "admin"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-slate-300 hover:border-blue-300"
                }`}
              >
                <div className="text-lg mb-1">
                  ⚙️
                </div>
                <div className="font-medium">
                  Admin
                </div>
              </button>

            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold rounded-xl transition-all"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-center text-slate-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>

  </div>
</div>

);
}
