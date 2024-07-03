
"use client";

import { Avatar, Blockquote, Rating } from "flowbite-react";

export const UserReview = () => {
  return (
    <figure className="max-w-screen-md rounded bg-gray-200 p-4 mb-4">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
        &quot;Estou realmente impressionado com a qualidade dos serviços prestados pela Fequer Transportes. Eles não só cumpriram todos os prazos como também garantiram que nossa carga fosse transportada de forma segura e eficiente. Toda a equipe demonstrou profissionalismo e atenção ao detalhe, o que fez toda a diferença para nossa operação. Recomendo fortemente a Fequer Transportes para quem busca um parceiro confiável no transporte de cargas.&quot;
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Augusto Prado</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO da Google</cite>
        </div>
      </figcaption>
    </figure>
  );
}
