"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import API from "@/services/api";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
const router = useRouter();
const { login } = useAuth();

const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
email: "",
password: "",
});

const handleChange = (
e: React.ChangeEvent<HTMLInputElement>
) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (
e: React.FormEvent
) => {
e.preventDefault();
setLoading(true);


try {
  const res = await API.post(
    "/auth/login",
    formData
  );

  login(
    res.data.token,
    res.data.user
  );

  toast.success("Login Successful");

  if (res.data.user.role === "admin") {
    router.push("/admin");
  } else if (
    res.data.user.role === "doctor"
  ) {
    router.push("/doctor");
  } else {
    router.push("/patient");
  }
} catch (error) {
  toast.error("Login Failed");
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-6"> <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">


    <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-teal-500 text-white p-12">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          🏥 HMS
        </h1>

        <h2 className="text-3xl font-semibold mb-4">
          Hospital Management System
        </h2>

        <p className="text-blue-100 text-lg mb-10">
          Modern healthcare management platform for hospitals, doctors, and patients.
        </p>

        <div className="space-y-4">
          <div>✓ Secure Authentication</div>
          <div>✓ Doctor Management</div>
          <div>✓ Patient Records</div>
          <div>✓ Appointment Scheduling</div>
          <div>✓ Prescriptions & Treatments</div>
          <div>✓ Real-Time Notifications</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold"></h3>
            <p className="text-sm">Doctors</p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold"></h3>
            <p className="text-sm">Patients</p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold"></h3>
            <p className="text-sm">Secure</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center p-8 lg:p-12">
      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Welcome Back
          </h2>

          <p className="text-slate-500 mt-2">
            Sign in to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-slate-600 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>

  </div>
</div>


);
}
