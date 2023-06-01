import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard Page</h1>
      <Link href={"/"}>Logout</Link>
      
    </main>
  );
}
