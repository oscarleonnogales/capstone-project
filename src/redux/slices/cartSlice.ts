import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../models/products/Product';
import { CartItem } from '../../models/cart/CartItem';

interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state, action: PayloadAction<CartItem[]>) => {
			state.items = action.payload;
		},
		increaseCartQuantity: (state, action: PayloadAction<Product>) => {
			const existingItem: CartItem | undefined = state.items.find(
				(item) => item.product.id === action.payload.id
			);
			if (existingItem) {
				if (!existingItem.limitReached) {
					existingItem.quantity++;
					existingItem.limitReached =
						existingItem.quantity === existingItem.product.data.stock ? true : false;
				}
				state.items = state.items.map((item) =>
					item.product.id === existingItem.product.id ? existingItem : item
				);
			} else {
				state.items = [
					...state.items,
					{
						product: action.payload,
						quantity: 1,
						limitReached: false,
					},
				];
			}
		},
		decreaseCartQuantity: (state, action: PayloadAction<Product>) => {
			const existingItem = state.items.find(
				(item) => item.product.id === action.payload.id
			) as CartItem;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.product.id !== existingItem.product.id);
			} else {
				existingItem.quantity--;
				existingItem.limitReached = false;
				state.items = state.items.map((item) =>
					item.product.id === existingItem.product.id ? existingItem : item
				);
			}
		},
		removeEntirelyFromCart: (state, action: PayloadAction<Product>) => {
			const existingItem = state.items.find(
				(item) => item.product.id === action.payload.id
			) as CartItem;
			state.items = state.items.filter((item) => item.product.id !== existingItem.product.id);
		},
		resetCart: (state) => {
			state.items = initialState.items;
		},
	},
});

export const {
	setCart,
	increaseCartQuantity,
	decreaseCartQuantity,
	removeEntirelyFromCart,
	resetCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
