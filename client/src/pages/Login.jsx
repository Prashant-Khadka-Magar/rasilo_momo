import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { useToast } from "@/components/hooks/use-toast";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      dispatch(setUser(response));
      navigate("/");
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: error.data?.message || "Login Failed. Please try again.",
        className: "bg-baseColor text-white",
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-6">
      <Card className="w-full max-w-lg shadow-lg p-6 bg-baseColor">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <div className="text-blue-400 text-right">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200 active:scale-95"
              disabled={isLoading}
            >
              {isLoading ? "Logging..." : "Login"}
            </Button>
          </form>
          <p className="text-center text-white mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
