import React from "react";
import ItemCount from "../ItemCount";
import Title from "../Title";

const ItemListContainer = ({ texto }) => {
	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};

	return (
		<>
			<Title greeting={texto} />
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
		</>
	);
};

export default ItemListContainer;
