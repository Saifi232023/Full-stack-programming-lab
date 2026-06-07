"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function PatientAppointmentsPage() {
  const [patients, setPatients] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    patient: "",
    appointmentDate: "",
    reason: "",
  });

  const fetchPatients = async () => {
    try {
      const res = await API.get("/patients");
      setPatients(res.data.patients);
    } catch {}
  };

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");
      setAppointments(res.data.appointments);
    } catch {}
  };

  useEffect(() => {
    fetchPatients();
    fetchAppointments();
  }, []);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await API.post(
        "/appointments",
        formData
      );

      toast.success(
        "Appointment Booked"
      );

      fetchAppointments();
    } catch {
      toast.error(
        "Booking Failed"
      );
    }
  };

  return (
    <ProtectedRoute allowedRole="patient">
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">
          My Appointments
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 mb-8"
        >
          <select
            className="border p-2"
            onChange={(e) =>
              setFormData({
                ...formData,
                patient:
                  e.target.value,
              })
            }
          >
            <option>
              Select Patient
            </option>

            {patients.map(
              (patient: any) => (
                <option
                  key={patient._id}
                  value={
                    patient._id
                  }
                >
                  {patient.name}
                </option>
              )
            )}
          </select>

          <input
            type="date"
            className="border p-2"
            onChange={(e) =>
              setFormData({
                ...formData,
                appointmentDate:
                  e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Reason"
            className="border p-2"
            onChange={(e) =>
              setFormData({
                ...formData,
                reason:
                  e.target.value,
              })
            }
          />

          <button className="bg-blue-600 text-white p-2 rounded">
            Book Appointment
          </button>
        </form>

        <div className="space-y-3">
          {appointments.map(
            (appointment: any) => (
              <div
                key={
                  appointment._id
                }
                className="border p-4 rounded"
              >
                <p>
                  {
                    appointment.reason
                  }
                </p>

                <p>
                  {
                    appointment.status
                  }
                </p>
              </div>
            )
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}