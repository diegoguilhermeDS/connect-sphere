"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";
import { destroyCookie } from "nookies";
import Toast from "../Toast";

const Header = () => {
  const pathName = usePathname();
  const router = useRouter()

  const handleLogout = () => {
    destroyCookie(null, "client.token")
    destroyCookie(null, "client.id")
    Toast({message: "Volte sempre!", type: "logout"})
    router.push("/")
  }

  return (
    <header className="shadow-md bg-gray-50">
      <div className="container mx-auto flex justify-between items-center h-20">
          <h6 className="font-semibold md:text-2xl text-sky-800">Connect Sphere</h6>
          <nav>
            {pathName == "/" && <Button type="outline" href="/register" size={2}>Cadastrar</Button>}
            {pathName == "/register" && <Button type="outline" href="/" size={2}>Voltar</Button>}
            {pathName == "/dashboard" && <Button type="edit" handle={handleLogout}>logout</Button>}
          </nav>
      </div>
    </header>
  );
};

export default Header;
