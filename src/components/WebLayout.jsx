import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";

function WebLayout() {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}

export default WebLayout;
