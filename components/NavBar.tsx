import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="flex justify-between p-4 shadow-md">
      <Link href={"/"}>MiniStore</Link>

      <Button>
        <ShoppingCart />
      </Button>
    </nav>
  );
};
