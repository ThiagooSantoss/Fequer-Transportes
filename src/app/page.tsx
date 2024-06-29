import React from "react";
import { AppCarousel } from "@/components/AppCarousel";
import { AppFormContato } from "@/components/AppFormContato";

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
        <section className="py-4 mx-auto max-w-screen-xl">
          <div className="relative overflow-hidden my-8">
            <AppFormContato />
          </div>
        </section>
      </div>
    </>
  );
}
