import { Divider } from "@mui/material";

function Header() {
  return (
    <>
      <div className="flex text-center w-full justify-between px-[20%] py-4 pb-5 items-center">
        <h1 className="font-bold text-4xl">Shopping Cart</h1>
        <h2 className="font-bold text-2xl">15 items</h2>
      </div>

      <Divider variant="middle" />
    </>
  );
}

export default Header;
