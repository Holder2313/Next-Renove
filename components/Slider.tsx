"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { SLIDERDATA } from "@/app/utils/slider/sliderData";
import { SliderType } from "@/type";
import { Button } from "./ui/button";

export function Slider() {

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <div className=" mt-20">

    <Carousel
      
      plugins={[plugin.current]}
      className="w-full"
      //   onMouseEnter={plugin.current.stop}
      //   onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" h-[600px] bg-slate-300">
        {SLIDERDATA.map((slide: SliderType) => (
          <CarouselItem key={slide.id}>
            <div className="p-1 relative w-full h-full  ">
              <Image
                className=" absolute -z-10"
                src={slide.img}
                alt="Description de l'image"
                layout="fill"
                objectFit="cover"
              />
              <div className=" text-slate-50 max-w-xl mx-auto my-[10%]  ">
                <h1 className=" text-4xl mb-5 text-center">{slide.title} </h1>
                <h2 className=" text-xl mb-5 text-center">{slide.text} </h2>
                <Button className=" block mx-auto">Contact</Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
    </div>
  );
}
