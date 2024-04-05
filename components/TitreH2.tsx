import React from "react";

interface TitreH2Props {
  title: string;
}

const TitreH2: React.FC<TitreH2Props> = ({ title }) => {
  return (
    <div className=" flex flex-col">
      <p>ROCHER RENOVE</p>
      <h2 className=" text-3xl">{title}</h2>
      <div className=" mt-1 h-[2px] bg-black w-[70px] "></div>
    </div>
  );
};

export default TitreH2;
