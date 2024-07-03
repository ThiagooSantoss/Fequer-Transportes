"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export const AppCarousel = () => {
  return (
    <div className="h-56 sm:h-[800px]">
      <Carousel>
        <Image src="/foto4.jpg" width={800} height={600} alt="Foto 4" />
        <Image src="/foto1.jpg" width={800} height={600} alt="Foto 1" />
        <Image src="/foto2.jpg" width={800} height={600} alt="Foto 2" />
        <Image src="/foto3.jpg" width={800} height={600} alt="Foto 3" />
      </Carousel>
    </div>
  );
};
