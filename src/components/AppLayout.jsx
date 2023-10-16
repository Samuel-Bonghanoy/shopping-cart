import { Grid } from "@mui/material";
// import MainFeaturedPost from "./Item";
import FeaturedPost from "./Item";
import { useCart } from "../contexts/CartContext";
import Spinner from "./Spinner";

function AppLayout() {
  const { isLoading, items } = useCart();

  console.log(items);

  return (
    <>
      <Grid container spacing={2} className="bg-slate-500 h-screen">
        <Grid item xs={10} className="bg-slate-500">
          {isLoading ? (
            <Spinner />
          ) : (
            items.map((item) => <FeaturedPost item={item} key={item.id} />)
          )}
        </Grid>
        <Grid item xs={2}>
          <p>xs=4</p>
        </Grid>
      </Grid>
    </>
  );
}

export default AppLayout;
