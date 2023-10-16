import { Grid } from "@mui/material";
// import MainFeaturedPost from "./Item";
import FeaturedPost from "./Item";
import { useCart } from "../contexts/CartContext";
import Spinner from "./Spinner";
import ResponsiveAppBar from "./AppBar";
import Header from "./Header";
import Review from "./Review";

function AppLayout() {
  const { isLoading, items } = useCart();

  console.log(items);

  return (
    <>
      {/* <ResponsiveAppBar /> */}

      <Grid container spacing={0} className="bg-slate-500 h-content">
        <Grid item xs={9} className="bg-slate-100">
          <Header options={{ title: "Shopping Cart", itemNum: items.length }} />
          {isLoading ? (
            <Spinner />
          ) : items ? (
            items.map((item) => <FeaturedPost item={item} key={item.id} />)
          ) : (
            <p>No items available.</p>
          )}
        </Grid>
        <Grid item xs={3} className="bg-gray-300">
          <Header options={{ title: "Order Summary" }} />
          <Review />
        </Grid>
      </Grid>
    </>
  );
}

export default AppLayout;
