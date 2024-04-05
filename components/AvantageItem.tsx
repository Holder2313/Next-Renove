import { AvantageListType } from "@/type";

export default function AvantageItem({ title, txt, icon }: AvantageListType) {
  return (
    <article className=" avantageAnim opacity-0 flex flex-col lg:flex-row items-center translate-x-8  w-full">
      <img className="w-10 mx-7 my-4" src={icon} alt="" />
      <div>
        <h4 className="text-2xl font-semibold text-center lg:text-justify">
          {title}
        </h4>
        <p className=" mt-1 text-lg text-center lg:text-justify">{txt}</p>
      </div>
    </article>
  );
}
