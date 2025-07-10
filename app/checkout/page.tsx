import { CheckOutForm } from "@/components/CheckoutForm";
import { OrderSummary } from "@/components/OrderSummary";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <Button className="mb-4" variant={"ghost"} asChild>
          <Link href={"/cart"}>
            <ArrowLeft />
            Back to Cart
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="self-start">
          <CheckOutForm />
        </div>
        <div className="self-start">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
