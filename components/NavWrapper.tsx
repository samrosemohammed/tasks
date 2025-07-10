"use client";

import { usePathname } from "next/navigation";
import { NavBar } from "./NavBar";

export const NavWrapper = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return <NavBar />;
};
