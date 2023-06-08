"use client";

import FormRegister from "@/components/Form/FormRegister";
import Link from "next/link";
import bgRegister from "../../../public/bg-register.png";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="container-main pb-20">
      <section className="flex flex-row-reverse items-center justify-center w-full lg:w-[970px] rounded-md shadow-lg overflow-hidden">
        <Image
          src={bgRegister}
          alt="iamge ilustrations register"
          className="hidden lg:block"
        />
        <div className="flex justify-center items-center container-form">
          <div className="lg:w-[315px] flex flex-col gap-7">
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
