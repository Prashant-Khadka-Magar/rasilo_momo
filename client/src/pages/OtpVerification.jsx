import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "@/redux/features/auth/authApi";
import { useToast } from "@/components/hooks/use-toast";

export default function OtpVerification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const email = location.state?.email; // Get the email from the registration page
  const navigate = useNavigate();
  const { toast } = useToast();

  const [verifyUser, { isLoading }] = useVerifyUserMutation();

  const onSubmit = async (data) => {
    try {
      const response = await verifyUser({ email, otp: data.otp }).unwrap();
      toast({
        title: "Success",
        description: "Account verified successfully!",
        status: "success",
         className:"bg-baseColor text-white"
      });
      navigate("/login"); // Redirect to login page after successful verification
    } catch (error) {
      toast({
        title: "Error",
        description: error.data?.message || "OTP verification failed. Please try again.",
        status: "error",
         className:"bg-baseColor text-white"
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-6">
      <Card className="w-full max-w-lg shadow-lg p-6 bg-baseColor">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">
            Verify OTP
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label className="text-white">OTP</Label>
              <Input
                {...register("otp", {
                  required: "OTP is required",
                  pattern: {
                    value: /^\d{5}$/, 
                    message: "OTP must be 5 digits",
                  },
                })}
                placeholder="Enter OTP"
              />
              {errors.otp && (
                <p className="text-red-500 text-sm">{errors.otp.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200 active:scale-95"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}