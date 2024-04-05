import React from 'react'
import PageContainer from './PageContainer'
import { Button } from './ui/button'
import Image from 'next/image';

export default function CallToAction() {
  return (
    <div className=' mt-32'>
      <PageContainer>
        <div className=' relative w-full h-[280px] flex flex-col justify-center items-center text-slate-50 '>
          <Image
            className=" absolute -z-10"
            src='/images/slider/chambre2.webp'
            alt="Description de l'image"
            layout="fill"
            objectFit="cover"
          />
          <h3 className=' text-3xl mb-2'>Demandez un devis gratuit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Parnesciunt.
          </p>
          <Button className=' my-2'>Contact</Button>
        </div>
      </PageContainer>
    </div>
  );
}
