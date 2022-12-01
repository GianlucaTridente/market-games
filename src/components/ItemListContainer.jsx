import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { CircularProgress } from "@mui/material";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const querycollection = collection(querydb, "products");

    if (categoryId) {
      const queryFIlter = query(
        querycollection,
        where("category", "==", categoryId)
      );
      getDocs(queryFIlter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(querycollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <div>
      {!data.length && (
        <div className="loarder-loader">
          {" "}
          <CircularProgress color="secondary" />
        </div>
      )}
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
