import { HeaderNav } from "@/components/HeaderNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import React from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className=" z-30 bg-white min-w-full fixed top-0 flex justify-between items-center py-4 px-8">
      <div className=" md:hidden mr-2">
        <ResponsiveMenu />
      </div>
      <Logo />

      <div className=" hidden md:block">
        <HeaderNav />
      </div>

      

      <Button>Contact</Button>
    </div>
  );
}
