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
      <NavigationMenuList className="flex flex-col lg:flex-row">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Upcoming Events
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Our Programs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
  

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="w-full px-4 fixed top-0 z-50">
      <div className='flex items-center justify-between gap-4'>
        <Avatar className='w-28 h-24'>
          <AvatarImage src="/images/signature.png" alt="@shadcn" />
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
