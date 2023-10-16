import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <>
      <div>Error: You are not authenticated</div>
      <Button onClick={() => navigate("/signin")}>Sign in</Button>
    </>
  );
}

export default Error;
