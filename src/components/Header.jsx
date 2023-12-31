import { Divider } from "@mui/material";

function Header({ options }) {
  return (
    <>
      <div className="flex text-center w-full justify-between px-[20%] py-4 pb-5 items-center">
        {options.title === "Order Summary" ? (
          <h1 className="font-bold text-center self-center items-center text-2xl">
            {options.title}
          </h1>
        ) : (
          <h1 className="font-bold text-4xl">{options.title}</h1>
        )}
        {options.itemNum ? (
          <h2 className="font-bold text-2xl">{options.itemNum} items</h2>
        ) : (
          ""
        )}
      </div>

      <Divider variant="middle" />
    </>
  );
}

export default Header;
