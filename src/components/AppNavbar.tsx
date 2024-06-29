"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export const AppNavbar = () => {
  return (
    <Navbar className="bg-[#005fa4] items-end">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          src={"/logo-azul-fequer-horizontal.png"}
          alt={`logo`}
          width={350}
          height={350}
        />
      </Navbar.Brand>
      <div className="block md:hidden">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="w-fit p-8">
        <Navbar.Link href="/" className="text-white hover:text-black text-base">
          Início
        </Navbar.Link>
        <Navbar.Link
          href="/sobre"
          className="text-white hover:text-black text-base"
        >
          Sobre
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white hover:text-black text-base">
          Serviços
        </Navbar.Link>
        <Navbar.Link
          href="/contato"
          className="text-white hover:text-black text-base"
        >
          Contatos
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
