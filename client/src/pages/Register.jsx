import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/hooks/use-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { toast } = useToast();


  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      toast({
        title: "Registration Successful",
        description: "Please check your email to verify your account.",
        className: "bg-baseColor text-white",
      });
      navigate("/verify-otp", { state: { email: data.email } });
    } catch (err) {
      toast({
        title: "Error",
        description: err.data?.message || "Login Failed. Please try again.",
        className: "bg-baseColor text-white",
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-6">
      <Card className="w-full max-w-lg shadow-lg p-6 bg-baseColor">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">
            Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label className="text-white">First Name</Label>
              <Input
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-white">Last Name</Label>
              <Input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
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
              <Label className="text-white">Password</Label>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200 active:scale-95"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>
          <p className="text-center text-white mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
