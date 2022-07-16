import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Title from "../Title";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

// 1- Traer el servicio de firestore
// 2- Crear un puntero al dato que queremos traer
// 3- Traer el dato con una promesa

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "products");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

	return (
		<>
			<Title greeting={texto} />
			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;
