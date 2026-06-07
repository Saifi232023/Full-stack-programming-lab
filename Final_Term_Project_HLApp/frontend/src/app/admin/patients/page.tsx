"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    email: "",
    phone: "",
  });

  const fetchPatients = async () => {
    try {
      const res = await API.get("/patients");
      setPatients(res.data.patients);
    } catch {
      toast.error("Failed to load patients");
    }
  };

  const deletePatient = async (
    id: string
  ) => {
    try {
      await API.delete(`/patients/${id}`);

      toast.success("Patient Deleted");

      fetchPatients();
    } catch {
      toast.error(
        "Failed to delete patient"
      );
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
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
      await API.post("/patients", formData);

      toast.success("Patient Added");

      setFormData({
        name: "",
        age: "",
        gender: "Male",
        email: "",
        phone: "",
      });

      fetchPatients();
    } catch {
      toast.error("Failed to add patient");
    }
  };

  return (
    <ProtectedRoute allowedRole="admin">
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">
          Patients Management
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            className="border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            className="border p-2 rounded"
            value={formData.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            className="border p-2 rounded"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">
              Male
            </option>
            <option value="Female">
              Female
            </option>
            <option value="Other">
              Other
            </option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border p-2 rounded"
            value={formData.phone}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded"
          >
            Add Patient
          </button>
        </form>

        <table className="w-full border bg-white text-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">
                Name
              </th>
              <th className="border p-2">
                Age
              </th>
              <th className="border p-2">
                Gender
              </th>
              <th className="border p-2">
                Email
              </th>
              <th className="border p-2">
                Phone
              </th>
              <th className="border p-2">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {patients.map(
              (patient: any) => (
                <tr key={patient._id}>
                  <td className="border p-2">
                    {patient.name}
                  </td>

                  <td className="border p-2">
                    {patient.age}
                  </td>

                  <td className="border p-2">
                    {patient.gender}
                  </td>

                  <td className="border p-2">
                    {patient.email}
                  </td>

                  <td className="border p-2">
                    {patient.phone}
                  </td>

                  <td className="border p-2">
                    <button
                      onClick={() =>
                        deletePatient(
                          patient._id
                        )
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </DashboardLayout>
    </ProtectedRoute>
  );
}