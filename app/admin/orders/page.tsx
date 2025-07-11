"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

type Order = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
  cart: Product[];
  total: number;
  date: string;
};

const Page = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
      }
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-muted-foreground">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="mb-8 border p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">
              Order #{index + 1} — {format(new Date(order.date), "PPPpp")}{" "}
            </h2>
            <p className="text-sm text-gray-500">
              {order.user.firstName} {order.user.lastName} ({order.user.email})
              — {order.user.address}
            </p>

            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Thumbnail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-12 w-12 object-cover rounded"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <p className="text-right font-semibold mt-2">
              Grand Total: ${order.total.toFixed(2)}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
