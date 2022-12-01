import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({ info }) {
  return (
    <Link to={`/item/${info.id}`}>
      <div className="card-item">
        <Card
          sx={{ maxWidth: 400, marginTop: "40px" }}
          className="card-item-card"
        >
          <CardActionArea sx={{ backgroundColor: "black" }}>
            <CardMedia component="img" height="200" image={info.img} alt="" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                {info.title}
              </Typography>
              <Typography
                variant="body2"
                fontSize="small"
                sx={{ color: "yellow" }}
              >
                #{info.category}
              </Typography>
              <Typography
                variant="body2"
                fontSize="big"
                sx={{ color: "white" }}
              >
                US${info.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ backgroundColor: "black" }}>
            <Link to={`/item/${info.id}`}>
              <Button
                size="small"
                sx={{ backgroundColor: "#7a057e", color: "white" }}
              >
                Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </Link>
  );
}
