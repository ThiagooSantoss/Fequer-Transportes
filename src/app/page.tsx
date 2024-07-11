import React from "react";
import Image from "next/image";
import { AppCarousel } from "@/components/AppCarousel";
import { AppFormContato } from "@/components/AppFormContato";
import { UserReview } from "@/components/UserReview";
import { AppServicos } from "@/components/AppServicos";

export default function Home() {
  return (
    <>
      <div className="container-full">
        <section className="py-4 mx-auto max-w-screen-xl">
          <div className="relative overflow-hidden my-8">
            <AppCarousel />
          </div>
        </section>
      </div>

      <div id="servico" className="container-full">
        <section className="bg-[#425d83] py-10 mx-auto max-w-screen-xl rounded mb-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="lg:mb-8 text-3xl font-bold text-white">
              Nossos Serviços
            </h2>
          </div>
          <AppServicos />
        </section>
      </div>

      <div id="equipe" className="container-full">
        <section className="bg-[#1f2937] py-10 mx-auto max-w-screen-xl rounded mb-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-white">Equipe</h2>
          </div>
          <div className="grid p-4 lg:p-10 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-sm">
              <a href="">
                <Image
                  src={"/Motorista_fequer.png"}
                  alt={`logo`}
                  width={350}
                  height={350}
                  className="mb-5 rounded-lg object-cover w-full rounded-t-lg h-full max-h-48"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-white">
                <a href="">Rogério Fequer</a>
              </h2>
              <p className="mb-4 text-gray-300 line-clamp-3">Motorista</p>
              <span className="inline-flex items-center font-medium text-gray-200">
                Rogério possui grande experiência na condução de caminhões
                grandes e na manipulação de cargas pesadas.
              </span>
            </article>
            <article className="max-w-sm">
              <a href="">
                <Image
                  src={"/Motorista_fequer2.png"}
                  alt={`logo`}
                  width={350}
                  height={350}
                  className="mb-5 rounded-lg object-cover w-full rounded-t-lg h-full max-h-48"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-white">
                <a href="">Rogério Fequer</a>
              </h2>
              <p className="mb-4 text-gray-300 line-clamp-3">Motorista</p>
              <span className="inline-flex items-center font-medium text-gray-200">
                Rogério possui grande experiência na condução de caminhões
                grandes e na manipulação de cargas pesadas.
              </span>
            </article>
            <article className="max-w-sm">
              <a href="">
                <Image
                  src={"/Motorista_fequer.png"}
                  alt={`logo`}
                  width={350}
                  height={350}
                  className="mb-5 rounded-lg object-cover w-full rounded-t-lg h-full max-h-48"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-white">
                <a href="">Rogério Fequer</a>
              </h2>
              <p className="mb-4 text-gray-300 line-clamp-3">Motorista</p>
              <span className="inline-flex items-center font-medium text-gray-200">
                Rogério possui grande experiência na condução de caminhões
                grandes e na manipulação de cargas pesadas.
              </span>
            </article>
            <article className="max-w-sm">
              <a href="">
                <Image
                  src={"/Motorista_fequer2.png"}
                  alt={`logo`}
                  width={350}
                  height={350}
                  className="mb-5 rounded-lg object-cover w-full rounded-t-lg h-full max-h-48"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-white">
                <a href="">Rogério Fequer</a>
              </h2>
              <p className="mb-4 text-gray-300 line-clamp-3">Motorista</p>
              <span className="inline-flex items-center font-medium text-gray-200">
                Rogério possui grande experiência na condução de caminhões
                grandes e na manipulação de cargas pesadas.
              </span>
            </article>
          </div>
        </section>
      </div>

      <div className="container-full">
        <section className="bg-[#425d83] py-10 mx-auto max-w-screen-xl rounded">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="lg:mb-8 text-3xl font-bold text-white">
              Depoimentos de Nossos Clientes
            </h2>
          </div>
          <article className="p-4 lg:p-10">
            <div className="relative overflow-hidden my-8 flex justify-center gap-4">
              <UserReview />
              <UserReview />
            </div>
          </article>
        </section>
      </div>

      <div id="contato" className="container-full">
        <section className="py-4 mx-auto max-w-screen-xl">
          <div className="relative overflow-hidden my-8">
            <AppFormContato />
          </div>
        </section>
      </div>
    </>
  );
}
