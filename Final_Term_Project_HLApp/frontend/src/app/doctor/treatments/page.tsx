"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function TreatmentsPage() {
  const [treatments, setTreatments] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    appointment: "",
    patient: "",
    doctor: "",
    diagnosis: "",
    physicalCheckup: "",
    treatmentStatus: "Ongoing",
    followUpDate: "",
  });

  const fetchTreatments = async () => {
    try {
      const res = await API.get("/treatments");
      setTreatments(res.data.treatments);
    } catch {
      toast.error("Failed to load treatments");
    }
  };

  useEffect(() => {
    fetchTreatments();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
        "/treatments",
        formData
      );

      toast.success(
        "Treatment Added"
      );

      fetchTreatments();
    } catch {
      toast.error(
        "Failed to add treatment"
      );
    }
  };

  return (
    <ProtectedRoute allowedRole="doctor">
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">
          Treatments
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
            name="diagnosis"
            placeholder="Diagnosis"
            className="border p-2"
            onChange={handleChange}
          />

          <input
            name="physicalCheckup"
            placeholder="Physical Checkup"
            className="border p-2"
            onChange={handleChange}
          />

          <input
            type="date"
            name="followUpDate"
            className="border p-2"
            onChange={handleChange}
          />

          <select
            name="treatmentStatus"
            className="border p-2"
            onChange={handleChange}
          >
            <option value="Ongoing">
              Ongoing
            </option>

            <option value="Improving">
              Improving
            </option>

            <option value="Recovered">
              Recovered
            </option>
          </select>

          <button className="bg-blue-600 text-white p-2 rounded">
            Add Treatment
          </button>
        </form>

        <div className="space-y-4">
          {treatments.map(
            (treatment: any) => (
              <div
                key={treatment._id}
                className="border rounded p-4"
              >
                <p>
                  <strong>
                    Diagnosis:
                  </strong>{" "}
                  {
                    treatment.diagnosis
                  }
                </p>

                <p>
                  <strong>
                    Status:
                  </strong>{" "}
                  {
                    treatment.treatmentStatus
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