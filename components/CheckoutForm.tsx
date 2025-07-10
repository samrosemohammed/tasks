"use client";
import { useForm } from "react-hook-form";
import { PlaceOrder } from "./ProductButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckOutFormData, checkOutFromSchema } from "@/lib/zodSchemas";
import { useRouter } from "next/navigation";

export const CheckOutForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckOutFormData>({
    resolver: zodResolver(checkOutFromSchema),
    defaultValues: {
      address: "",
      email: "",
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = () => {
    router.push("/success");
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Infomation</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CardContent className="space-y-4">
          <div className=" flex gap-2">
            <div className="w-full space-y-2">
              <Label>First Name</Label>
              <Input
                {...register("firstName")}
                name="firstName"
                id="firstName"
                placeholder="Your First Name"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors?.firstName.message}</p>
              )}
            </div>
            <div className="w-full space-y-2">
              <Label>Last Name</Label>
              <Input
                {...register("lastName")}
                name="lastName"
                id="lastName"
                placeholder="Your Last Name"
              />{" "}
              {errors.lastName && (
                <p className="text-red-500">{errors?.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              {...register("email")}
              name="email"
              id="email"
              placeholder="your@gmail.com"
            />{" "}
            {errors.email && <p>{errors?.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Input
              {...register("address")}
              name="address"
              id="address"
              placeholder="Your Address"
            />{" "}
            {errors.address && (
              <p className="text-red-500">{errors?.address.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <PlaceOrder isSubmitting={isSubmitting} />
        </CardFooter>
      </form>
    </Card>
  );
};
