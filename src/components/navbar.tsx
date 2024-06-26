"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Separator } from "./ui/separator";
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const NavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex max-lg:bg-background p-2 rounded-md max-lg:border items-start flex-col lg:flex-row">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#project">
            Projects
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#contact">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
  

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="w-full">
      <div className='flex items-center justify-between max-w-screen-xl mx-auto px-4 gap-4'>
        <Avatar className='lg:w-28 lg:h-24 w-20 h-16'>
          <AvatarImage src="/images/signature.png" alt="signature" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex items-center gap-4'>
          <div className='relative lg:hidden'>
            <Button size="icon" variant="ghost" onClick={() => setOpenNav(!openNav)}>
              <AlignJustify />
            </Button>
            {openNav && (
              <div className='absolute top-full right-0 rounded-md p-2'>
                <NavbarMenu />
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <NavbarMenu />
          </div>
        </div>
      </div>
      <Separator className="w-full bg-white"/>
    </nav>
  );
};
export default Navbar;
