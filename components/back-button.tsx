"use client";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-black/40 transition-colors w-full sm:w-auto justify-center"
    >
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </button>
  );
};

export default BackButton;
