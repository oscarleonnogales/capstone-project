import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../models/products/Product';

interface ProductState {
	products: Product[];
	selectedProductId: string | null;
}

const initialState: ProductState = {
	products: [],
	selectedProductId: null,
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
		},
		setSelectedProductId: (state, action: PayloadAction<string>) => {
			state.selectedProductId = action.payload;
		},
		resetProducts: (state) => {
			state.products = initialState.products;
			state.selectedProductId = initialState.selectedProductId;
		},
	},
});

export const { setProducts, setSelectedProductId, resetProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectSelectedProductId = (state: RootState) => state.products.selectedProductId;

export default productSlice.reducer;
