"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 z-[9999] transition-all duration-75"
    />
  );
}
