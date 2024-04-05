import { SERVICES } from "@/app/utils/services/SERVICES";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Services } from "@/type";
import Link from "next/link";

export function CollapseServices() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Services</AccordionTrigger>
        <AccordionContent>
                  {SERVICES.map((service: Services) => (
                      <div key={service.title} className=" flex flex-col">
                           <Link className=" text-xl my-1" href={`/`} > {service.title} </Link>
                      </div>
             
          ))}
        </AccordionContent>
          </AccordionItem>
          
        

     
    </Accordion>
  );
}
