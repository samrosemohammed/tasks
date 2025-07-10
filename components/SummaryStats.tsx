"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type Order = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
  cart: CartItem[];
  total: number;
  date: string;
};

export const SummaryStats = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("orders");
    if (stored) {
      try {
        const parsed: Order[] = JSON.parse(stored);
        setOrders(parsed);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  const totalOrders = orders.length;
  const totalProducts = orders.reduce(
    (sum, order) =>
      sum + order.cart.reduce((acc, item) => acc + item.quantity, 0),
    0
  );
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  const summary = [
    { title: "Total Products", value: totalProducts },
    { title: "Total Orders", value: totalOrders },
    { title: "Total Revenue", value: `$${totalRevenue.toFixed(2)}` },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {summary.map((item, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
