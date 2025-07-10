"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { NavAddToCart } from "./ProductButton";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 shadow-md">
      <Link href={"/"}>MiniStore</Link>

      <Link href="/cart" className="relative">
        <NavAddToCart />
      </Link>
    </nav>
  );
};
