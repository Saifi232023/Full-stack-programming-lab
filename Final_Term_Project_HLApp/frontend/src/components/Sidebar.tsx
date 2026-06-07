"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaBell,
  FaNotesMedical,
  FaFilePrescription,
} from "react-icons/fa";

import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  const pathname = usePathname();

  const activeClass =
    "flex items-center gap-3 p-3 rounded-xl bg-blue-600 text-white font-medium shadow";

  const normalClass =
    "flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition";

  return (
    <aside className="w-72 min-h-screen bg-white border-r shadow-sm">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            HMS Portal
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Healthcare Management
          </p>
        </div>

        {/* ADMIN */}
        {user?.role === "admin" && (
          <div className="space-y-2">
            <Link
              href="/admin"
              className={
                pathname === "/admin"
                  ? activeClass
                  : normalClass
              }
            >
              <FaHome />
              Dashboard
            </Link>

            <Link
              href="/admin/doctors"
              className={
                pathname === "/admin/doctors"
                  ? activeClass
                  : normalClass
              }
            >
              <FaUserMd />
              Doctors
            </Link>

            <Link
              href="/admin/patients"
              className={
                pathname === "/admin/patients"
                  ? activeClass
                  : normalClass
              }
            >
              <FaUsers />
              Patients
            </Link>

            <Link
              href="/admin/appointments"
              className={
                pathname === "/admin/appointments"
                  ? activeClass
                  : normalClass
              }
            >
              <FaCalendarCheck />
              Appointments
            </Link>

            <Link
              href="/admin/notifications"
              className={
                pathname ===
                "/admin/notifications"
                  ? activeClass
                  : normalClass
              }
            >
              <FaBell />
              Notifications
            </Link>
          </div>
        )}

        {/* DOCTOR */}
        {user?.role === "doctor" && (
          <div className="space-y-2">
            <Link
              href="/doctor"
              className={
                pathname === "/doctor"
                  ? activeClass
                  : normalClass
              }
            >
              <FaHome />
              Dashboard
            </Link>

            <Link
              href="/doctor/treatments"
              className={
                pathname ===
                "/doctor/treatments"
                  ? activeClass
                  : normalClass
              }
            >
              <FaNotesMedical />
              Treatments
            </Link>

            <Link
              href="/doctor/prescriptions"
              className={
                pathname ===
                "/doctor/prescriptions"
                  ? activeClass
                  : normalClass
              }
            >
              <FaFilePrescription />
              Prescriptions
            </Link>
          </div>
        )}

        {/* PATIENT */}
        {user?.role === "patient" && (
          <div className="space-y-2">
            <Link
              href="/patient"
              className={
                pathname === "/patient"
                  ? activeClass
                  : normalClass
              }
            >
              <FaHome />
              Dashboard
            </Link>

            <Link
              href="/patient/appointments"
              className={
                pathname ===
                "/patient/appointments"
                  ? activeClass
                  : normalClass
              }
            >
              <FaCalendarCheck />
              Appointments
            </Link>

            <Link
              href="/patient/history"
              className={
                pathname ===
                "/patient/history"
                  ? activeClass
                  : normalClass
              }
            >
              <FaNotesMedical />
              Medical History
            </Link>

            <Link
              href="/patient/notifications"
              className={
                pathname ===
                "/patient/notifications"
                  ? activeClass
                  : normalClass
              }
            >
              <FaBell />
              Notifications
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}