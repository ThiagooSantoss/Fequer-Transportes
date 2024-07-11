"use client";

export default function Sobre() {
  return (
    <>
      <div className="container-full mx-auto h-[700px] my-8 p-6 bg-white shadow-lg rounded-lg text-2xl">
        <section className="py-4 mx-auto max-w-screen-xl">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Fequer Transportes
          </h1>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mt-12 mb-6">
            Transporte de Cargas com Excelência e Confiabilidade
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Na Fequer Transportes, levamos sua carga a sério! Com anos de
            experiência, garantimos soluções logísticas rápidas, seguras e
            eficientes para o seu negócio.
          </p>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mt-12 mb-2">
            Por Que Escolher a Fequer Transportes?
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <span className="font-bold">Segurança e Confiabilidade:</span>{" "}
              Tratamos sua carga como se fosse nossa.
            </li>
            <li>
              <span className="font-bold">Soluções Personalizadas:</span>{" "}
              Atendemos suas necessidades específicas.
            </li>
            <li>
              <span className="font-bold">Entrega Rápida:</span> Respeitamos
              seus prazos.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mt-12 mb-2">
            🚀 <span className="font-bold">Não perca tempo!</span>
          </h3>
          <p className="text-gray-700 text-center mt-12 mb-6">
            Deixe a Fequer Transportes cuidar do transporte da sua carga. Entre
            em contato conosco hoje mesmo e descubra como podemos ajudar a
            impulsionar o seu negócio!
          </p>
        </section>
      </div>
      <div className="text-center">
        <a
          href="/#contato"
          className="mb-2 inline-block px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Entre em Contato Agora!
        </a>
      </div>
    </>
  );
}
