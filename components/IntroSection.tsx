import React from 'react'
import PageContainer from './PageContainer'
import TitreH2 from './TitreH2'
import { Button } from './ui/button';

export default function IntroSection() {
    return (
      
        <div className=' mt-32 px-2'>
            <PageContainer>
      <div>
        
        <TitreH2 title={"Exellence en Peinture et Rénovation"} />
      </div>

      <div className="flex flex-col-reverse md:flex-row md:justify-between mt-10">
        <div className=" md:w-[50%] flex flex-col justify-between px-[30px]  ">
          <div className=" h-[100%] flex flex-col py-5  ">
            <p className=" textIntro text-md lg:text-[17px] text-justify text-slate-700 lg:pr-20">
              <span>
                Chez <strong>Rocher Renove</strong>, nous sommes fiers d'offrir
                un travail de peinture et de rénovation d'excellence depuis plus
                de quinze ans.
              </span>
              <br />
              <span>
                Situés dans le <strong>94</strong> et intervenant sur toute{" "}
                <strong>l'Île-de-France</strong>, nous nous spécialisons dans la
                transformation de vos intérieurs et extérieurs, avec un œil pour
                le design et un autre pour la durabilité.
              </span>
              <br />
              <span>
                Notre palette de services inclut la{" "}
                <strong>peinture décorative</strong>, la rénovation de{" "}
                <strong>parquet</strong>, et la métamorphose de pièces
                maîtresses telles que les <strong>salons</strong>, les{" "}
                <strong>cuisines</strong> <strong>salles de bains</strong>.
              </span>
              <br />
              <span>
                La satisfaction de nos clients est au cœur de notre démarche,
                guidant chaque coup de pinceau et chaque choix de matériaux.
                Pour redéfinir votre espace avec goût et professionnalisme,{" "}
                <strong>Rocher Renove</strong> est votre partenaire de
                confiance.
              </span>
            </p>
            <div className=" mt-10">
              <Button>Démarrez votre projet de rénovation</Button>
            </div>
          </div>
        </div>

        <div className="   hidden md:flex -z-10 relative md:w-[50%] justify-end">
          {/* <div className=" absolute top-14 right-10 w-[300px] h-[300px] bg-main-color  "></div> */}
          <div className=" imgBoxShadowRight w-[400px] h-[200px] sm:w-[550px] md:h-[100%] ">
            <div className=" z-10 h-full absolute bg-slate-50"></div>
            <img
              className=" imgAnimIntro w-[100%] h-[95%] object-cover  imgAnimIntro "
              src='/images/slider/salon.png'
              alt=""
            />
          </div>
        </div>
      </div>
    </PageContainer>
        </div>
    
  );
}
