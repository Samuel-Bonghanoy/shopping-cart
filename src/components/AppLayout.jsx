import {
  AppBar,
  Grid,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
// import MainFeaturedPost from "./Item";
import FeaturedPost from "./Item";
import { useCart } from "../contexts/CartContext";
import Spinner from "./Spinner";

function AppLayout() {
  const { isLoading, items } = useCart();

  console.log(items);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} className="bg-slate-500 h-screen">
        <Grid item xs={10} className="bg-slate-500">
          {isLoading ? (
            <Spinner />
          ) : items ? (
            items.map((item) => <FeaturedPost item={item} key={item.id} />)
          ) : (
            <p>No items available.</p>
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
