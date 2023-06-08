"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import Button from "../Button";
import Toast from "../Toast";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    destroyCookie(null, "client.token");
    destroyCookie(null, "client.id");
    Toast({ message: "Volte sempre!", type: "logout" });
    router.push("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 lg:static w-full shadow-md bg-gray-50 px-2 ${
        openMenu ? "h-40" : "h-20"
      } lg:h-20 transition-all ease-in-out duration-500`}
    >
      <div className="relative container mx-auto flex justify-between items-center h-20">
        <h6 className="font-semibold md:text-2xl text-sky-800">
          Connect Sphere
        </h6>
        <button
          className="flex justify-center items-center lg:hidden w-10 h-10"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? (
            <RiMenuFill
              size={30}
              color="#075985"
              className="animate-slit_in_vertical"
            />
          ) : (
            <RiCloseFill
              size={40}
              color="#075985"
              className="animate-slit_in_vertical"
            />
          )}
        </button>
        <nav
          className={`absolute right-0 translate-y-0 ${
            openMenu ? "animate-slide_in_top" : "animate-slide_out_top"
          } lg:static lg:animate-none`}
        >
          {pathName == "/" && (
            <Button type="outline" href="/register" size={2}>
              Cadastrar
            </Button>
          )}
          {pathName == "/register" && (
            <Button type="outline" href="/" size={2}>
              Voltar
            </Button>
          )}
          {pathName == "/dashboard" && (
            <Button type="edit" handle={handleLogout}>
              logout
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
