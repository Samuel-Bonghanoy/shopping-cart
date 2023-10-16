import * as React from "react";
// import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";

function FeaturedPost({ item }) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="py-2 px-3 grid"
    >
      <Grid item xs={8} className="pt-3">
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }} className="px-3 py-5">
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" className="text-green-700">
                PHP {item.price}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {item.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <Button variant="contained">Add to Cart</Button>
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 160,
                display: { xs: "none", sm: "block" },
                objectFit: "contain",
              }}
              image={item.image}
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
}

export default FeaturedPost;
