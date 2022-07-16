import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// 1- Traer el servicio de firestore
// 2- Crear un puntero al dato que queremos traer
// 3- Traer el dato con una promesa

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", detalleId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detalleId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
