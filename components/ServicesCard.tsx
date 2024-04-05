"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { Prestation } from "@/type";
import Image from "next/image";
import { Button } from "./ui/button";

export default function ServiceCard({ cardData }: { cardData: Prestation }) {
  const cardRef = useRef(null);
  const textInfoRef = useRef(null);
  const textRef = useRef(null); // Référence pour le conteneur de la carte
  const imageRef = useRef(null); // Référence pour l'image
  const titleRef = useRef(null); // Référence pour le titre

  const animateIn = () => {
    // Animation pour l'entrée de la souris
    gsap.to(textRef.current, { y: -200, duration: 0.4 });
    gsap.to(textInfoRef.current, { duration: 0.4 });
    gsap.to(cardRef.current, { y: 10, duration: 0.1 });
    gsap.to(imageRef.current, { opacity: 0.4, duration: 0.4 }); // Exemple d'animation de l'image
    gsap.to(titleRef.current, {
      background: "none",
      scale: 1.2,
      duration: 0.5,
    }); // Exemple d'animation du titre
  };

  const animateOut = () => {
    // Animation pour la sortie de la souris
    gsap.to(textRef.current, { y: 0, duration: 0.4 });
    gsap.to(textInfoRef.current, { duration: 0.4 });
    gsap.to(cardRef.current, { y: 0, duration: 0.4 });
    gsap.to(imageRef.current, { opacity: 1, duration: 0.4 }); // Retour à l'état initial de l'image
    gsap.to(titleRef.current, {
      scale: 1,
      duration: 1,
    }); // Retour à l'état initial du titre
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      className=" serviceAnim  z-10 bg-black cursor-pointer w-[100%] h-[330px] overflow-hidden relative flex justify-center items-center "
    >
      <div className=" opacity-65">
        <Image
        ref={imageRef}
        className="absolute"
        src={cardData.img}
        layout="fill"
        objectFit="cover"
        alt=""
      />
 
      </div>
     
      <div className=" absolute">
        <h4
          ref={titleRef}
          className=" text-slate-50 font-semibold p-5 text-2xl text-center mb-20"
        >
          {cardData.title}
        </h4>
      </div>

      <div
        ref={textRef}
        className="  h-[530px] absolute top-0 flex flex-col justify-end opacity-1 text-slate-50"
      >
        <p className=" p-1  " ref={textInfoRef}>
          {cardData.txt}
        </p>

        <Button>Découvrir</Button>
      </div>
    </div>
  );
}
