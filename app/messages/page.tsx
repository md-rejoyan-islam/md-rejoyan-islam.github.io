"use client";
import { ClientMessages } from "@/components/messages/client-messages";
import { redirect } from "next/navigation";

import { useSearchParams } from "next/navigation";
export default function MessagesPage() {
  const searchParams = useSearchParams();
  const api_key = searchParams.get("api_key") || "";

  if (api_key !== process.env.NEXT_PUBLIC_API_KEY) {
    return redirect("/");
  }

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Client Messages
        </h1>
        <ClientMessages />
      </div>
    </section>
  );
}
