"use client";

import { useGetSession } from "@/hooks/session/use-get-session";

export function DashboardWrapper() {
  const { data, isLoading } = useGetSession();
  console.log(data);

  return <div>a</div>;
}
