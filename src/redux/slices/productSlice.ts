import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../models/products/Product';

interface ProductState {
	products: Product[];
	selectedProduct: Product | null;
}

const initialState: ProductState = {
	products: [],
	selectedProduct: null,
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
		},
		setSelectedProduct: (state, action: PayloadAction<Product>) => {
			state.selectedProduct = action.payload;
		},
		resetProducts: (state) => {
			state.products = initialState.products;
			state.selectedProduct = initialState.selectedProduct;
		},
	},
});

export const { setProducts, setSelectedProduct, resetProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;

export default productSlice.reducer;
