"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOMEGALLERY } from "@/app/utils/homeGallery/homeGalleryData";
import { HomeGalleryType } from "@/type";
import PageContainer from "./PageContainer";
import TitreH2 from "./TitreH2";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function HomeGallery() {
  const galleryRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    galleryRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, scale: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100", // L'animation commencera quand le 'top' de l'élément sera à '100px' du 'bottom' du viewport
            toggleActions: "play none none reverse", // Cette option détermine ce qui se passe à l'entrée et à la sortie du viewport
            once: true, // L'animation ne se déclenchera qu'une fois
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !galleryRef.current.includes(el)) {
      galleryRef.current.push(el);
    }
  };

  return (
    <div className="mt-32 px-2">
          <PageContainer>
              <div className=" w-full flex justify-between items-center">
                  <TitreH2 title="Nos réalisations" />
                  <Button variant={'outline'}>Tout Voir</Button>
              </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {HOMEGALLERY.map((item: HomeGalleryType) => (
            <div
              key={item.id}
              className="bg-gray-200 overflow-hidden opacity-0 relative h-[280px]"
              ref={addToRefs}
            >
              <Image
                className="object-cover w-full min-h-full"
                src={item.src}
                alt={item.alt}
                objectFit="cover"
                layout="fill"
              />
            </div>
          ))}
              </div>
            <Button className=" mx-auto block mt-10">Voir toutes les Réalisations</Button> 
      </PageContainer>
    </div>
  );
}
