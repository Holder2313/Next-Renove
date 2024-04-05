import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { CollapseServices } from "./CollapseServices";
import Logo from "./Logo";

export function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="" />
      </SheetTrigger>
          <SheetContent side="left">
              <SheetHeader>
                  <SheetTitle>
                      <div className=" mb-10">
                         <Logo /> 
                      </div>
                      
                  </SheetTitle>
              </SheetHeader>
        <div className=" text-2xl flex flex-col gap-6">
          <Link href="/">Acceuil</Link>
          <Link href="/">Présentation</Link>
          <CollapseServices />
                  <Link href="/">Réalisations</Link>
                  <Button className=" mt-2">Contact</Button>
        </div>

        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
              </SheetFooter> */}
              

      </SheetContent>
    </Sheet>
  );
}
