import { ShoppingCart, Star } from "lucide-react";
import { Badge } from "./ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { AddToCart } from "./ProductButton";

interface ProductDetailsProps {
  product: any;
}
export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="mb-2 flex items-center justify-between">
            <Badge variant={"outline"}>{product.category}</Badge>
            <Badge variant={"secondary"}>{product.brand}</Badge>
          </div>

          <CardTitle className="text-2xl">{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  ${product.price}
                </span>
                <Badge variant="destructive">
                  {product.discountPercentage}% OFF
                </Badge>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < fullStars
                      ? "fill-yellow-400 text-yellow-400"
                      : i === fullStars && hasHalfStar
                      ? "fill-yellow-400/50 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${
                product.stock > 50
                  ? "bg-green-500"
                  : product.stock > 10
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            />
            <span className="text-sm">
              {product.stock > 50
                ? "In Stock"
                : product.stock > 0
                ? `Only ${product.stock} left`
                : "Out of Stock"}
            </span>
            <span className="text-sm text-muted-foreground">
              ({product.stock} available)
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <AddToCart product={product} />
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Brand:</dt>
              <dd className="font-medium">{product.brand}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Category:</dt>
              <dd className="font-medium">{product.category}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">SKU:</dt>
              <dd className="font-medium">NF-{product.id}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
};
