export const initialState = {
	basket: [],
	isDark: false,
};

//how to make a selector::
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case "REMOVE_FROM_BASKET":
			// finds the first one and then returns it.
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id} as it's not in the basket!)`
				);
			}
			return {
				...state,
				basket: newBasket,
			};

		case "TOGGLE_LIGHT":
			return {
				...state,
				isDark: !state.isDark,
			};

		default:
			return state;
	}
};

export default reducer;
