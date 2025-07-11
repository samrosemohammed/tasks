import { options, url } from "@/lib/api-url-options";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Product } from "@/types/product";

const getData = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const Products = async () => {
  const data = await getData(url, options);
  const products: Product[] = data?.data.data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Card key={product.id} className="p-4 hover:shadow-md">
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full object-cover hover:scale-105 transition-transform duration-300 rounded"
            />
          </div>
          <CardHeader>
            <Badge variant={"secondary"}>{product.category}</Badge>
            <CardTitle className="text-lg">{product.title}</CardTitle>
            <p className="text-xl font-semibold">${product.price}</p>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href={`/product/${product.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
