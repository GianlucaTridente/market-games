import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detailId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
