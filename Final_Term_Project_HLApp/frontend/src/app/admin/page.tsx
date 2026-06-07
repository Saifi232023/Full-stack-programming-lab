"use client";

import Link from "next/link";

import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaNotesMedical,
} from "react-icons/fa";

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRole="admin">
      <DashboardLayout>
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome to the Hospital
            Management System
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/admin/doctors"
            className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition"
          >
            <FaUserMd
              size={40}
              className="mb-4 text-blue-600"
            />

            <h2 className="text-xl font-semibold">
              Doctors
            </h2>

            <p className="text-gray-500 mt-2">
              Manage hospital doctors
            </p>
          </Link>

          <Link
            href="/admin/patients"
            className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition"
          >
            <FaUsers
              size={40}
              className="mb-4 text-green-600"
            />

            <h2 className="text-xl font-semibold">
              Patients
            </h2>

            <p className="text-gray-500 mt-2">
              Manage patient records
            </p>
          </Link>

          <Link
            href="/admin/appointments"
            className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition"
          >
            <FaCalendarCheck
              size={40}
              className="mb-4 text-purple-600"
            />

            <h2 className="text-xl font-semibold">
              Appointments
            </h2>

            <p className="text-gray-500 mt-2">
              Review appointments
            </p>
          </Link>

          <Link
            href="/admin/notifications"
            className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition"
          >
            <FaNotesMedical
              size={40}
              className="mb-4 text-red-600"
            />

            <h2 className="text-xl font-semibold">
              Notifications
            </h2>

            <p className="text-gray-500 mt-2">
              View reminders & alerts
            </p>
          </Link>
        </div>

        <div className="mt-10 bg-white rounded-xl shadow-lg border p-6">
          <h2 className="text-2xl font-semibold mb-3">
            System Overview
          </h2>

          <p className="text-gray-600">
            This Hospital Management System
            provides appointment booking,
            treatment tracking, prescription
            management, patient records,
            doctor management, and
            notification services in a
            secure healthcare environment.
          </p>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}