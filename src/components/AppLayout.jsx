import { Grid } from "@mui/material";
// import MainFeaturedPost from "./Item";
import FeaturedPost from "./Item";

function AppLayout() {
  return (
    <>
      <Grid container spacing={2} className="bg-slate-500 h-screen">
        <Grid item xs={10} className="bg-slate-500">
          {/* <FeaturedPost
            post={{
              title: "Title of a longer featured blog post",
              description:
                "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
              image: "https://source.unsplash.com/random?wallpapers",
              imageText: "main image description",
              linkText: "Continue reading…",
            }}
          /> */}
        </Grid>
        <Grid item xs={2}>
          <p>xs=4</p>
        </Grid>
      </Grid>
    </>
  );
}

export default AppLayout;
