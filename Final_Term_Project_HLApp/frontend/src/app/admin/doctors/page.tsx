"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    experience: "",
    email: "",
    phone: "",
  });

  const fetchDoctors = async () => {
    try {
      const res = await API.get("/doctors");
      setDoctors(res.data.doctors);
    } catch {
      toast.error("Failed to load doctors");
    }
  };

  const deleteDoctor = async (
    id: string
  ) => {
    try {
      await API.delete(`/doctors/${id}`);

      toast.success("Doctor Deleted");

      fetchDoctors();
    } catch {
      toast.error(
        "Failed to delete doctor"
      );
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

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

    try {
      await API.post("/doctors", formData);

      toast.success("Doctor Added");

      setFormData({
        name: "",
        specialization: "",
        experience: "",
        email: "",
        phone: "",
      });

      fetchDoctors();
    } catch {
      toast.error("Failed to add doctor");
    }
  };

  return (
    <ProtectedRoute allowedRole="admin">
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">
          Doctors Management
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <input
            name="name"
            placeholder="Doctor Name"
            className="border p-2"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="specialization"
            placeholder="Specialization"
            className="border p-2"
            value={formData.specialization}
            onChange={handleChange}
          />

          <input
            name="experience"
            placeholder="Experience"
            className="border p-2"
            value={formData.experience}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="border p-2"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            className="border p-2"
            value={formData.phone}
            onChange={handleChange}
          />

          <button className="bg-blue-600 text-white p-2 rounded">
            Add Doctor
          </button>
        </form>

        <table className="w-full border bg-white text-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">
                Specialization
              </th>
              <th className="border p-2">
                Experience
              </th>
              <th className="border p-2">
                Email
              </th>
              <th className="border p-2">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doctor: any) => (
              <tr key={doctor._id}>
                <td className="border p-2">
                  {doctor.name}
                </td>

                <td className="border p-2">
                  {doctor.specialization}
                </td>

                <td className="border p-2">
                  {doctor.experience}
                </td>

                <td className="border p-2">
                  {doctor.email}
                </td>

                <td className="border p-2">
                  <button
                    onClick={() =>
                      deleteDoctor(
                        doctor._id
                      )
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardLayout>
    </ProtectedRoute>
  );
}