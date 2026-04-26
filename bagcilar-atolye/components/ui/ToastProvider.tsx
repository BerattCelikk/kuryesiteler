"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1A1A1A",
          color: "#fff",
          border: "1px solid #2A2A2A",
          fontSize: 13,
        },
        success: { iconTheme: { primary: "#FF6B00", secondary: "#000" } },
        error: { iconTheme: { primary: "#EF4444", secondary: "#000" } },
      }}
    />
  );
}
