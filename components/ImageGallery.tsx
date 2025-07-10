"use client";
import { useState } from "react";

interface ImageGalleryProps {
  product: any;
}
export const ImageGallery = ({ product }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg border">
        <img
          src={product.images[selectedImage] || "/placeholder.svg"}
          alt={product.title}
          width={600}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex gap-2">
        {product.images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square w-20 overflow-hidden rounded-md border-2 ${
              selectedImage === index ? "border-primary" : "border-muted"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${product.title} ${index + 1}`}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
