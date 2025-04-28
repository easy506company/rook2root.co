"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // or whatever icon you use

export function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-sm text-primary hover:underline mb-4"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Go Back
    </button>
  );
}
