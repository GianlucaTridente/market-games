import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const products = [
  {
    id: 1,
    category: "action",
    title: "Dead by Daylight",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg?t=1666892376",
    price: "$7.99",
  },
  {
    id: 2,
    category: "action",
    title: "Grand Theft Auto V",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1667343890",
    price: "$8.99",
  },
  {
    id: 3,
    category: "action",
    title: "Red Dead Rendention 2",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305",
    price: "$7.99",
  },
  {
    id: 4,
    category: "action",
    title: "Rust",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg?t=1666865208",
    price: "$6.50",
  },
  {
    id: 5,
    category: "arcade",
    title: "Cuphead",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg?t=1666882803",
    price: "$4.99",
  },
  {
    id: 6,
    category: "arcade",
    title: "Geometry Dash",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/322170/header.jpg?t=1624472273",
    price: "$3.99",
  },
  {
    id: 7,
    category: "arcade",
    title: "METAL SLUG",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/366250/header.jpg?t=1584641206",
    price: "$2.99",
  },
  {
    id: 8,
    category: "arcade",
    title: "Street Fighter V",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1662087954",
    price: "$3.99",
  },
  {
    id: 9,
    category: "terror",
    title: "Phasmophobia",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg?t=1667574170",
    price: "$9.99",
  },
  {
    id: 10,
    category: "terror",
    title: "Resident Evil Village",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg?t=1666936638",
    price: "$12.99",
  },
  {
    id: 11,
    category: "terror",
    title: "The Forest",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/242760/header.jpg?t=1666811027",
    price: "$8.99",
  },
  {
    id: 12,
    category: "terror",
    title: "HUNT: Showdown",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/594650/header_alt_assets_0.jpg?t=1667373442",
    price: "$8.99",
  },
];

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getData.then((res) =>
      setData(res.find((product) => product.id == parseInt(detailId)))
    );
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
