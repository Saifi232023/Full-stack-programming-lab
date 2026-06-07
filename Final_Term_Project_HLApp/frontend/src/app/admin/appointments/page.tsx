"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<any[]>([]);

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");

      setAppointments(res.data.appointments);
    } catch (error) {
      toast.error("Failed to load appointments");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const approveAppointment = async (
    id: string
  ) => {
    try {
      await API.put(
        `/appointments/approve/${id}`,
        {}
      );

      toast.success(
        "Appointment Approved"
      );

      fetchAppointments();
    } catch (error) {
      toast.error(
        "Failed to approve appointment"
      );
    }
  };

  const rejectAppointment = async (
    id: string
  ) => {
    try {
      await API.put(
        `/appointments/reject/${id}`,
        {}
      );

      toast.success(
        "Appointment Rejected"
      );

      fetchAppointments();
    } catch (error) {
      toast.error(
        "Failed to reject appointment"
      );
    }
  };

  return (
    <ProtectedRoute allowedRole="admin">
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">
          Appointment Management
        </h1>

        <div className="bg-white text-black rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">
                  Patient
                </th>

                <th className="p-3 border">
                  Doctor
                </th>

                <th className="p-3 border">
                  Date
                </th>

                <th className="p-3 border">
                  Reason
                </th>

                <th className="p-3 border">
                  Status
                </th>

                <th className="p-3 border">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {appointments.map(
                (appointment) => (
                  <tr
                    key={appointment._id}
                  >
                    <td className="border p-3">
                      {appointment.patient
                        ?.name || "N/A"}
                    </td>

                    <td className="border p-3">
                      {appointment.doctor
                        ?.name || "Not Assigned"}
                    </td>

                    <td className="border p-3">
                      {new Date(
                        appointment.appointmentDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="border p-3">
                      {appointment.reason}
                    </td>

                    <td className="border p-3">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          appointment.status ===
                          "Approved"
                            ? "bg-green-600"
                            : appointment.status ===
                              "Rejected"
                            ? "bg-red-600"
                            : "bg-yellow-500"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td className="border p-3">
                      {appointment.status ===
                        "Pending" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              approveAppointment(
                                appointment._id
                              )
                            }
                            className="bg-green-600 text-white px-3 py-1 rounded"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() =>
                              rejectAppointment(
                                appointment._id
                              )
                            }
                            className="bg-red-600 text-white px-3 py-1 rounded"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}