import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ItemDetail({ data }) {
  return (
    <div className="card-detail">
      <Card sx={{ maxWidth: 700, marginTop: "40px" }}>
        <CardActionArea sx={{ backgroundColor: "black" }}>
          <CardMedia
            component="img"
            height="400"
            image={data.img}
            alt="green iguana"
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
              {data.title}
            </Typography>
            <Typography variant="body2" fontSize = "small" sx={{ color: "yellow" }}>
              #{data.category}
            </Typography>
            <Typography variant="body2" fontSize = "big" sx={{ color: "white" }}>
              US{data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
