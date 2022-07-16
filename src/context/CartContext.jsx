import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	// const addProduct = (item, newQuantity) => {
	//     const newCart = cart.filter(prod => prod.id !== item.id);
	//     newCart.push({ ...item, quantity: newQuantity });
	//     setCart(newCart);
	// }

	// const addProduct = (item, newQuantity) => {
	//     const { quantity = 0 } = cart.find(prod => prod.id === item.id) || {};
	//     const newCart = cart.filter(prod => prod.id !== item.id);
	//     setCart([...newCart, { ...item, quantity: quantity + newQuantity }])
	// }

	// const addProduct = (item, quantity) => {
	//     let newCart;
	//     let product = cart.find(product => product.id === item.id);
	//     if (product) {
	//         product.quantity += quantity;
	//         newCart = [...cart];
	//     } else {
	//         product = { ...item, quantity: quantity };
	//         newCart = [...cart, product];
	//     }
	//     setCart(newCart);
	// }

	const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));

	return (
		<CartContext.Provider
			value={{
				clearCart,
				isInCart,
				removeProduct,
				addProduct,
				totalPrice,
				totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
