import React, { useReducer } from 'react';
import cart_Context from './cart_Context';

const defaultCartState = { items: [], totalAmount: 0 };

const CartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedItems = state.items.concat(action.item); //concat() is being used (and NOT "push()") as it returns a new array and doesnt alter the old array aka previous snapshot.
		const updatedTotalAmount =
			state.totalAmount + action.item.price + action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === 'REMOVE') {
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		CartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD', item: item });
	};
	const removeItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'REMOVE', item: item });
	};
	const cart_context = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};
	return (
		<cart_Context.Provider value={cart_context}>
			{props.children}
		</cart_Context.Provider>
	);
};

export default CartProvider;
