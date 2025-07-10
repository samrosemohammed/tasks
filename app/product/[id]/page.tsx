import { ImageGallery } from "@/components/ImageGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { options, urlBasedOnId } from "@/lib/api-url-options";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const getData = async (id: string, url: string, options: RequestInit) => {
  try {
    const res = await fetch(`${url}/${id}`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const data = await getData(id, urlBasedOnId, options);
  const product = data?.data;
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  console.log(product);
  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div className="container mx-auto py-4 px-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <ImageGallery product={product} />
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
