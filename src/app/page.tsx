import React from "react";
import Image from "next/image";
import { AppCarousel } from "@/components/AppCarousel";
import { AppFormContato } from "@/components/AppFormContato";
import { UserReview } from "@/components/UserReview";

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

      <div className="container-full">
        <section className="bg-[#425d83] py-10 mx-auto max-w-screen-xl rounded mb-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-white">Nossos Serviços</h2>
          </div>
          <article className="p-10 text-xl">
              <p className="text-gray-200 mt-4 px-10">
              Na Fequer Transportes, oferecemos soluções completas em transporte de cargas para todo o Brasil. Nossa missão é garantir que sua carga chegue ao destino com segurança, eficiência e no prazo acordado. Conheça mais sobre nossos serviços:
              </p>
              <p className="text-gray-200 mt-4 px-10">
              <strong>Transporte Rodoviário:</strong> Contamos com uma frota moderna e bem equipada para realizar o transporte rodoviário de cargas secas, refrigeradas ou perigosas. Operamos em todas as regiões do país, oferecendo flexibilidade e adaptabilidade para atender às necessidades específicas de cada cliente.
              </p>
              <p className="text-gray-200 mt-4 px-10">
              <strong>Logística Integrada:</strong> Além do transporte, oferecemos serviços de logística integrada que incluem armazenamento, gestão de estoques, embalagem, expedição e distribuição de cargas. Nosso objetivo é otimizar os processos logísticos para reduzir custos e melhorar a eficiência operacional.
              </p>
              <p className="text-gray-200 mt-4 px-10">
              <strong>Serviço de Cargas Expressas:</strong> Para entregas urgentes, disponibilizamos o serviço de cargas expressas. Com prioridade no transporte e processos otimizados, garantimos a entrega rápida de seus produtos.
              </p>
              <p className="text-gray-200 mt-4 px-10">
              <strong>Transporte de Cargas Especiais:</strong> Temos expertise e equipamentos específicos para o transporte de cargas de grandes dimensões, pesadas ou de alto valor agregado. Nossos profissionais são treinados para lidar com as complexidades e exigências desse tipo de transporte.
              </p>
              <p className="text-gray-200 mt-4 px-10">
              <strong>Rastreamento e Segurança:</strong> Todos os nossos serviços contam com sistemas de rastreamento em tempo real, proporcionando transparência e segurança. Você pode monitorar sua carga a qualquer momento e estar seguro de que está sendo bem cuidada.
              </p>
              <p className="text-gray-200 mt-4 px-10">
              <strong>Suporte ao Cliente:</strong> Nossa equipe de suporte está sempre disponível para ajudá-lo com qualquer dúvida ou necessidade. Desde a cotação até a entrega final, garantimos um atendimento personalizado e acessível.
              </p>
              <p className="text-gray-200 mt-4 px-10">
              Na Fequer Transportes, estamos comprometidos com a excelência em cada etapa do transporte. Entre em contato conosco hoje mesmo para saber como podemos ajudar no sucesso de sua operação logística.
              </p>
          </article>
        </section>
      </div>

      <div className="container-full">
        <section className="bg-[#1f2937] py-10 mx-auto max-w-screen-xl rounded mb-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-white">Nossa Equipe</h2>
          </div>
          <div className="grid p-10 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <article className="max-w-xs">
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
                    Rogério possui grande experiência na condução de caminhões grandes e na manipulação de cargas pesadas.
                  </span>
              </article>
              <article className="max-w-xs">
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
                    Rogério possui grande experiência na condução de caminhões grandes e na manipulação de cargas pesadas.
                  </span>
              </article>
              <article className="max-w-xs">
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
                    Rogério possui grande experiência na condução de caminhões grandes e na manipulação de cargas pesadas.
                  </span>
              </article>
              <article className="max-w-xs">
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
                    Rogério possui grande experiência na condução de caminhões grandes e na manipulação de cargas pesadas.
                  </span>
              </article>
          </div>          
        </section>
      </div>

      <div className="container-full">
        <section className="bg-[#425d83] py-10 mx-auto max-w-screen-xl rounded">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-white">Depoimentos de Nossos Clientes</h2>
          </div>
          <article className="p-10">
            <div className="relative overflow-hidden my-8 flex justify-center gap-4">
              <UserReview />
              <UserReview />
            </div>
          </article>          
        </section>
      </div>      

      <div className="container-full">
        <section className="py-4 mx-auto max-w-screen-xl">
          <div className="relative overflow-hidden my-8">
            <AppFormContato />
          </div>
        </section>
      </div>
    </>
  );
}
