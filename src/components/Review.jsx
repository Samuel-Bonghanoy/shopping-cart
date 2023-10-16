import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useCart } from "../contexts/CartContext";
import { Autocomplete, Button, TextField } from "@mui/material";

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
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, marginBottom: "10px" }}
        >
          Shipping Address
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[
            { label: "Standard Delivery - PHP 100", id: 1 },
            { label: "Fast Delivery - PHP 300", id: 2 },
          ]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Shipping options" />
          )}
        />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, marginBottom: "10px", marginTop: "15px" }}
        >
          Promo Code
        </Typography>
        <TextField
          fullWidth
          id="filled-basic"
          label="Enter your code"
          variant="filled"
        />
        <div className="flex flex-col gap-3 justify-between mt-5">
          <Button color="success" fullWidth variant="contained">
            Apply coupon
          </Button>
          <Button fullWidth variant="contained">
            Place Order
          </Button>
        </div>
      </List>
    </div>
  );
}
