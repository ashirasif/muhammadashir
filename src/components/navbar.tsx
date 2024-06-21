"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 mb-2 flex w-screen flex-row items-center justify-between border-b border-black bg-transparent px-4 pb-2 dark:border-white">
      <Avatar className="aspect-square h-24 w-28">
        <AvatarImage src="/images/signature.png" alt="signature" className="brightness-0 dark:brightness-100" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
    </div>
  );
};
export default Navbar;
