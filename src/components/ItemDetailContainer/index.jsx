import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";

const film = {
	id: 1,
	image:
		"https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=a286f1df6bfcc7903f33b83456e214c8&host=art-gallery-latam.api.hbo.com&w=1280",
	title: "Interestellar",
};

const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(film);
			}, 3000);
		});
		getData.then((res) => setData(res));
	}, []);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
