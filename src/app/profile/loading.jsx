"use client";
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <Spinner color="success" size="lg" label="Loading Animals..." />
    </div>
  );
}