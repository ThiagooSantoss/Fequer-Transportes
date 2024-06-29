"use client";

import { Footer } from "flowbite-react";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";

export const AppFooter = () => {
  return (
    <Footer bgDark className="rounded-none">
      <div className="w-full">
        <div className="text-center w-full gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="legal" className=" text-white" />
            <Footer.LinkGroup col className=" text-white">
              <Footer.Link href="#">Política de Privacidade</Footer.Link>
              <Footer.Link href="#">Termos &amp; Condições</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="w-full space-x-4 px-4 py-6 sm:flex sm:items-center sm:justify-center">
            <Footer.Copyright
              href="#"
              by="Fequer Transportes™"
              year={2024}
              className="text-white"
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="tel:+5511947487270"
                icon={BsTelephone}
                className=" text-white"
              />
              <Footer.Icon
                href="https://wa.me/5511947487270"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsWhatsapp}
                className=" text-white"
              />
              <Footer.Icon
                href="https://www.instagram.com/fequer_transportes/"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsInstagram}
                className=" text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};
