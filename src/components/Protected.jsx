import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Assuming you have an auth context

function Protected() {
  const { loggedIn } = useAuth(); // You should define this in your auth context

  return loggedIn ? <Outlet /> : <Navigate to="/error" replace />;
}

export default Protected;
