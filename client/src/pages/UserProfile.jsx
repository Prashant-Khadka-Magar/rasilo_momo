import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/redux/features/auth/authSlice"; // Adjust import based on your Redux setup
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLogoutUserMutation } from "@/redux/features/auth/authApi";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [logoutUser,{isLoading}]=useLogoutUserMutation();

  if (!userInfo) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="p-6 text-center bg-white shadow-lg">
          <p className="text-lg font-semibold">
            Please log in to view your profile
          </p>
          <Button className="mt-4" onClick={() => navigate("/login")}>
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  const { firstName, lastName, email, phone, address, avatar } = userInfo;

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap(); // Call API
      dispatch(logout()); // Clear Redux state
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md p-6 shadow-lg bg-baseColor text-white">
        <CardContent className="text-center">
          <Avatar className="w-24 h-24 mx-auto">
            <AvatarImage
              src={avatar}
              alt="User Avatar"
            />
            <AvatarFallback>{firstName}</AvatarFallback>
          </Avatar>

          <h2 className="text-2xl font-semibold mt-4">
            {firstName} {lastName}
          </h2>
          <p>{email}</p>

          {phone && <p className="text-gray-700 mt-2">📞 {phone}</p>}
          {address && <p className="text-gray-700 mt-2">🏠 {address}</p>}

          <Button
            className="mt-6 bg-red-500 text-white hover:bg-red-600"
            onClick={handleLogout}
      disabled={isLoading}
          >
            {isLoading? "logging Out.." : "Logout"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
