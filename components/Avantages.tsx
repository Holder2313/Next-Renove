'use client'

import React, { useEffect, useRef } from "react";
import canape from "/images/slider/canape.webp";
import AvantageItem from "../components/AvantageItem";
import { gsap } from "gsap";

import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import PageContainer from "./PageContainer";
import { AVANTAGESLIST } from "@/app/utils/avantagesList/AvantageList";
import Image from "next/image";
import { AvantageListType } from "@/type";
import TitreH2 from "./TitreH2";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Avantages() {


  

  useEffect(() => {
    gsap.fromTo(
      ".avantageAnim",
      {
        x: 400,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,

        scrollTrigger: {
          trigger: ".avantageAnim",
          start: " center +=200",
          end: "bottom center",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section className=" mt-32 px-2 ">
          <PageContainer>
              <TitreH2 title="Nos Avantages" />
        <div className=" mt-10 flex flex-col lg:flex-row w-full lg:pl-[30px] ">
          {/* image */}
          <div className=" imgBoxShadowRight  mr-[100px]  w-[100%] h-[200px] lg:w-[480px] lg:h-[550px] ">
                    <Image className=" object-cover w-full h-full" src='/images/slider/canape.webp' alt="canape" width={400} height={400} />
          </div>

          <div className=" max-w-[80%] lg:w-[60%] lg:pr-[10%] mx-auto pt-20 lg:pt-0  flex flex-col gap-6 items-center justify-around">
            {AVANTAGESLIST.map((avantage: AvantageListType) => (
              <AvantageItem
                key={avantage.id}
                title={avantage.title}
                txt={avantage.txt}
                    icon={avantage.icon}
                    alt={avantage.alt}
                    id={avantage.id}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
