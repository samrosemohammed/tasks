"use client";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const OrderSummary = () => {
  const { cart, total } = useCart();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {item.quantity} × ${item.price.toFixed(2)}{" "}
                  {item.discountPercentage > 0 && (
                    <span className="text-green-600">
                      ({item.discountPercentage}% off)
                    </span>
                  )}
                </p>
              </div>
              <p className="font-semibold">
                $
                {(
                  item.quantity *
                  item.price *
                  (1 - item.discountPercentage / 100)
                ).toFixed(2)}
              </p>
            </div>
          ))
        )}

        <div className="border-t pt-4 text-lg font-semibold flex justify-between">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
};
