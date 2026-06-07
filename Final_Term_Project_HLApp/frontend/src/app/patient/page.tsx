"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";


export default function PatientPage() {
  return (
    <ProtectedRoute allowedRole="patient">
      <DashboardLayout>
        <h1 className="text-3xl font-bold">
            Admin Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="border rounded p-6">
            Doctors
            </div>

            <div className="border rounded p-6">
            Patients
            </div>

            <div className="border rounded p-6">
            Appointments
            </div>

            <div className="border rounded p-6">
            Treatments
            </div>
        </div>
</DashboardLayout>
    </ProtectedRoute>
  );
}