import { ContinueShopping } from "@/components/ProductButton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <Card>
        <CardContent className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Order Successful!
          </h1>
          <p className="text-gray-600 mt-2 max-w-sm">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <ContinueShopping />
        </CardFooter>
      </Card>
    </div>
  );
};
export default Page;
