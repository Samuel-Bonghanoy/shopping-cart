import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Assuming you have an auth context

function Protected({ path, element }) {
  const { loggedIn } = useAuth(); // You should define this in your auth context

  return loggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/error" replace />
  );
}

export default Protected;
