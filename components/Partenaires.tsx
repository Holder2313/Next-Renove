'use client'

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PARTENAIRES } from "@/app/utils/partenairesGallery/PartenairesData";
import { PartenairesType } from "@/type";
import Image from "next/image";
import PageContainer from "./PageContainer";
import TitreH2 from "./TitreH2";

export function Partenaires() {

    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    
    return (
      <div className=" mt-32 px-2 flex justify-center items-center">
        <PageContainer>
          <TitreH2 title="Nos Partenaires" />
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
            }}
            className="w-full mt-10"
          >
            <CarouselContent>
              {PARTENAIRES.map((item: PartenairesType) => (
                <CarouselItem
                  key={item.id}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 w-full h-full flex justify-center items-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={230}
                      height={150}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselNext />
      <CarouselPrevious /> */}
          </Carousel>
        </PageContainer>
      </div>
    );
}
