import React from 'react'
import PageContainer from './PageContainer'
import TitreH2 from './TitreH2'
import { PRESTATIONS } from '@/app/utils/prestations/PrestationsData';
import { Prestation } from '@/type';
import ServiceCard from './ServicesCard';

export default function ServicesSection() {
  return (
    <div className=" mt-32 px-2">
      <PageContainer>
        <TitreH2 title="Nos prestations" />

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center my-20 gap-6  ">
          {PRESTATIONS &&
            PRESTATIONS.map((prestation: Prestation) => (
              <ServiceCard key={prestation.id} cardData={prestation} />
            ))}
        </div>
      </PageContainer>
    </div>
  );
}
