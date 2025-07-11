"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { ArrowLeft, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface AddToCartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
}
export const AddToCart = ({ product }: AddToCartProps) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <Button className="w-full" onClick={handleAddToCart}>
      <ShoppingCart className="mr-2" />
      Add to Cart
    </Button>
  );
};

export const NavAddToCart = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Button variant={"ghost"}>
      <ShoppingCart />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </Button>
  );
};

export const PlaceOrder = ({ isSubmitting }: { isSubmitting?: boolean }) => {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full">
      Place Order
    </Button>
  );
};

export const ContinueShopping = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Button asChild>
        <Link href={"/"}>
          <ShoppingBag />
          Continue Shopping
        </Link>
      </Button>
      <Button variant={"secondary"} asChild>
        <Link href={"/checkout"}>
          <ArrowLeft />
          Back to Checkout
        </Link>
      </Button>
    </div>
  );
};
