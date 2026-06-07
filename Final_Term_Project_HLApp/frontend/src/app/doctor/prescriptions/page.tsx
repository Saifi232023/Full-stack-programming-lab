"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function PrescriptionsPage() {
  const [prescriptions, setPrescriptions] =
    useState<any[]>([]);

  const [formData, setFormData] = useState({
    appointment: "",
    patient: "",
    doctor: "",
    medicineName: "",
    dosage: "",
    schedule: "",
    notes: "",
  });

  const fetchPrescriptions = async () => {
    try {
      const res = await API.get(
        "/prescriptions"
      );

      setPrescriptions(
        res.data.prescriptions
      );
    } catch {
      toast.error(
        "Failed to load prescriptions"
      );
    }
  };

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    try {
      await API.post(
        "/prescriptions",
        {
          appointment:
            formData.appointment,

          patient:
            formData.patient,

          doctor:
            formData.doctor,

          medicines: [
            {
              medicineName:
                formData.medicineName,

              dosage:
                formData.dosage,

              schedule:
                formData.schedule,
            },
          ],

          notes:
            formData.notes,
        }
      );

      toast.success(
        "Prescription Added"
      );

      fetchPrescriptions();
    } catch {
      toast.error(
        "Failed to add prescription"
      );
    }
  };

  return (
    <ProtectedRoute allowedRole="doctor">
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">
          Prescriptions
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-3 mb-8"
        >
          <input
            name="appointment"
            placeholder="Appointment ID"
            className="border p-2"
            onChange={handleChange}
          />

          <input
            name="patient"
            placeholder="Patient ID"
            className="border p-2"
            onChange={handleChange}
          />

          <input
            name="doctor"
            placeholder="Doctor ID"
            className="border p-2"
            onChange={handleChange}
          />

          <input
            name="medicineName"
            placeholder="Medicine Name"
            className="border p-2"
            onChange={handleChange}
          />

          <input
            name="dosage"
            placeholder="Dosage"
            className="border p-2"
            onChange={handleChange}
          />

          <input
            name="schedule"
            placeholder="Schedule"
            className="border p-2"
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Doctor Notes"
            className="border p-2"
            onChange={handleChange}
          />

          <button className="bg-green-600 text-white p-2 rounded">
            Add Prescription
          </button>
        </form>

        <div className="space-y-4">
          {prescriptions.map(
            (prescription: any) => (
              <div
                key={prescription._id}
                className="border rounded p-4"
              >
                <p>
                  <strong>
                    Patient:
                  </strong>{" "}
                  {
                    prescription.patient
                      ?.name
                  }
                </p>

                <p>
                  <strong>
                    Notes:
                  </strong>{" "}
                  {
                    prescription.notes
                  }
                </p>

                <ul className="list-disc ml-5 mt-2">
                  {prescription.medicines?.map(
                    (
                      medicine: any,
                      index: number
                    ) => (
                      <li key={index}>
                        {
                          medicine.medicineName
                        }
                        {" - "}
                        {
                          medicine.dosage
                        }
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}