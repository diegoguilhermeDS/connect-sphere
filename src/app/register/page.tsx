"use client";

import FormRegister from "@/components/Form/FormRegister";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Register Page</h1>
      <FormRegister />
      <Link href={"/"}>Voltar</Link>
    </main>
  );
}
