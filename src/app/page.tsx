"use client"
import Link from "next/link";
import FormLogin from "@/components/Form/FormLogin";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login Page</h1>
      <FormLogin/>
      <Link href={"/register"}>cadastrar-se</Link>
    </main>
  );
}
