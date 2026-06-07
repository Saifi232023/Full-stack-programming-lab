"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "@/services/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  const fetchNotifications = async () => {
    try {
      const res = await API.get(
        "/notifications"
      );

      setNotifications(
        res.data.notifications
      );
    } catch (error) {
      toast.error(
        "Failed to load notifications"
      );
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <ProtectedRoute allowedRole="admin">
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">
          Notifications
        </h1>

        <div className="space-y-4">
          {notifications.map(
            (notification) => (
              <div
                key={notification._id}
                className="border rounded-lg p-4 shadow-sm"
              >
                <h2 className="font-bold">
                  {notification.title}
                </h2>

                <p className="mt-2">
                  {
                    notification.message
                  }
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Type:{" "}
                  {
                    notification.type
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