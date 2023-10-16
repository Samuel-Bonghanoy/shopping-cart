import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useCart } from "../contexts/CartContext";
import { Button } from "@mui/material";

export default function Review() {
  const { cart } = useCart();
  const price = cart.reduce((acc, cur) => {
    console.log(acc + cur.price);
    return acc + cur.price;
  }, 0);

  return (
    <div className="px-4 py-3">
      <List>
        {cart.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }} className="flex">
            <ListItemText primary={product.title} />
            <Typography variant="body2" className="self-start">
              {product.price}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            PHP {String(price)}
          </Typography>
        </ListItem>
        <div className="flex flex-col gap-3 justify-between mt-5">
          <Button fullWidth variant="contained">
            Place Order
          </Button>
        </div>
      </List>
    </div>
  );
}
