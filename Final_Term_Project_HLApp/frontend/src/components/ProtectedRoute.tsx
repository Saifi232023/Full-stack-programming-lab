"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({
  children,
  allowedRole,
}: {
  children: React.ReactNode;
  allowedRole: string;
}) {
  const router = useRouter();

  const {
    user,
    isLoading,
  } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    if (
      user.role !== allowedRole
    ) {
      router.push("/login");
    }
  }, [
    user,
    isLoading,
    router,
    allowedRole,
  ]);

  if (isLoading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}