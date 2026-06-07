"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
export default function PatientHistoryPage() {
const { user } = useAuth();
const [prescriptions, setPrescriptions] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
if (!user) return;
const fetchHistory = async () => {
  try {
    const patientsRes = await API.get("/patients");
    const patients = patientsRes.data.patients;

    const matchedPatient = patients.find(
      (p: any) => p.email === user.email
    );

    if (!matchedPatient) {
      toast.error("Patient record not found");
      setLoading(false);
      return;
    }

    const historyRes = await API.get(
      `/prescriptions/history/${matchedPatient._id}`
    );

    setPrescriptions(historyRes.data.prescriptions);
  } catch {
    toast.error("Failed to load medical history");
  } finally {
    setLoading(false);
  }
};

fetchHistory();
}, [user]);
return (
<ProtectedRoute allowedRole="patient">
<DashboardLayout>
<h1 className="text-3xl font-bold mb-6">Medical History</h1>
    {loading && (
      <p className="text-gray-500">Loading your medical history...</p>
    )}

    {!loading && prescriptions.length === 0 && (
      <p className="text-gray-500">No prescription history found.</p>
    )}

    <div className="space-y-4">
      {prescriptions.map((prescription: any) => (
        <div key={prescription._id} className="border rounded p-4">
          <p>
            <strong>Doctor:</strong>{" "}
            {prescription.doctor?.name ?? "N/A"}
          </p>

          <p>
            <strong>Appointment Date:</strong>{" "}
            {prescription.appointment?.appointmentDate
              ? new Date(prescription.appointment.appointmentDate).toLocaleDateString()
              : "N/A"}
          </p>

          <p>
            <strong>Notes:</strong>{" "}
            {prescription.notes ?? "None"}
          </p>

          <ul className="list-disc ml-5 mt-2">
            {prescription.medicines?.map(
              (medicine: any, index: number) => (
                <li key={index}>
                  {medicine.medicineName} — {medicine.dosage}{" "}
                  <span className="text-gray-500 text-sm">
                    ({medicine.schedule})
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  </DashboardLayout>
</ProtectedRoute>
);
}