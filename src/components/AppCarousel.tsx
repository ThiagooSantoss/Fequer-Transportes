"use client";

import { Carousel } from "flowbite-react";

export const AppCarousel = () => {
  return (
    <div className="h-56 sm:h-[800px] ">
      <Carousel>
        <img src="foto4.jpg" alt="..." />
        <img src="foto1.jpg" alt="..." />
        <img src="foto2.jpg" alt="..." />
        <img src="foto3.jpg" alt="..." />
        {/* <img src="fequer_16.jpg" alt="..." /> */}
      </Carousel>
    </div>
  );
};
