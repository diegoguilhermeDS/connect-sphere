"use client";

import FormRegister from "@/components/Form/FormRegister";
import Link from "next/link";
import bgRegister from "../../../public/bg-register.png";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-20 pb-20">
      <section className="flex flex-row-reverse w-full md:w-[970px]">
        <Image
          src={bgRegister}
          alt="iamge ilustrations register"
          className="hidden md:block"
        />
        <div className="flex justify-center items-center container-form">
          <div className="md:w-[315px] flex flex-col gap-7">
            <div>
              <h4>Crie sua conta</h4>
              <span>vamos registrar e conectar </span>
            </div>
            <FormRegister />
            <p className="text-center mt-2">
              ja tem uma conta?{" "}
              <Link href={"/"} className="h7 text-sky-800">
                entrar
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
