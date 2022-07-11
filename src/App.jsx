import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
