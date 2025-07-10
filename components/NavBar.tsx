"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { NavAddToCart } from "./ProductButton";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-4 shadow-md">
      <Link href={"/"}>MiniStore</Link>

      <div className="flex items-center justify-center gap-4">
        <Link href="/cart" className="relative">
          <NavAddToCart />
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
          })}
          href={"/login"}
        >
          Admin
        </Link>
      </div>
    </nav>
  );
};
