"use client";

import Link from "next/link";
import Image from "next/image";
import FormLogin from "@/components/Form/FormLogin";
import bgLogin from "../../public/bg-login.png";

export default function Home() {
  return (
    <main className="container-main">
      <section className="flex lg:w-[970px] rounded-md shadow-lg overflow-hidden">
        <Image
          src={bgLogin}
          alt="iamge ilustrations login"
          className="hidden lg:block"
        />
        <div className="flex justify-center items-center container-form">
          <div className="md:w-[315px] flex flex-col gap-7">
            <div>
              <h4>Login</h4>
              <span>
                por favor preencha os seus dados para acessar à sua conta
              </span>
            </div>
            <FormLogin />
            <p className="text-center mt-2">
              não tem uma conta?{" "}
              <Link href={"/register"} className="h7 text-sky-800">
                inscrever-se
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
