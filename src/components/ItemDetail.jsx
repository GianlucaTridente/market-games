import React, { useState } from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function ItemDetail({ data }) {
  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="card-detail">
      <Card sx={{ maxWidth: 700, marginTop: "40px" }}>
        <CardActionArea sx={{ backgroundColor: "black" }}>
          <CardMedia
            component="img"
            height="300"
            image={data.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body2"
              fontSize="small"
              sx={{ color: "yellow" }}
            >
              #{data.category}
            </Typography>
            <Typography variant="body2" sx={{ color: "white", margin: "10px" }}>
                {data.description}
              </Typography>
              <Typography variant="body2" fontSize="big" sx={{ color: "red" }}>
              US${data.price}
            </Typography>
            {goToCart ? (
              <Link className="cart-buy" to="/cart">
                Buy
              </Link>
            ) : (
              <ItemCount initial={1} stock={5} onAdd={onAdd} />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
