"use client";

import { axios } from "@/configs/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function VerifyEmailPage() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token") || "";
  const callbackURL = params.get("callbackURL") || "";

  useEffect(() => {
    if (token) {
      axios
        .get(`/api/v1/auth/verify-email?token=${token}&callbackURL=/`)
        .then(() => {
          router.push(callbackURL);
        });
    }
  }, [token, callbackURL]);

  return <div className="text-xl text-white">Verifying...</div>;
}
