import { options, url } from "@/lib/api-url-options";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProtectedRoute from "@/components/ProtectedRoute";

const getData = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {
  const data = await getData(url, options);
  const products = data?.data?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Discount %</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Thumbnail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.discountPercentage}%</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-12 w-12 object-cover rounded"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
