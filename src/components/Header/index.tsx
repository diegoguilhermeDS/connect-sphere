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
    <header className="shadow-md">
      <div className="container flex justify-between items-center h-20">
          <h1>Connect Sphere</h1>
          <nav>
            {pathName == "/" && <Link href={"/register"}>Cadastra</Link>}
            {pathName == "/register" && <Link href={"/"}>Voltar</Link>}
            {pathName == "/dashboard" && <Button handle={handleLogout}>logout</Button>}
          </nav>
      </div>
    </header>
  );
};

export default Header;
