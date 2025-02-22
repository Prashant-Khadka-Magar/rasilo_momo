import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="flex justify-center items-center my-6">
      <Card className="w-full max-w-lg shadow-lg p-6 bg-baseColor ">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label className="text-white">Name</Label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label className="text-white">Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label className="text-white">Message</Label>
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200 active:scale-95"
            >
                Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
