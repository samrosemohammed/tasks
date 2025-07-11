import { ImageGallery } from "@/components/ImageGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { options, urlBasedOnId } from "@/lib/api-url-options";

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
