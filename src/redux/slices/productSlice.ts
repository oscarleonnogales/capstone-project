import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../models/products/Product';

interface ProductState {
	products: Product[];
	displayedProducts: Product[];
	selectedProductId: string | null;
	currentPage: number;
	prev_page: string | undefined;
	next_page: string | undefined;
}

const initialState: ProductState = {
	products: [],
	displayedProducts: [],
	selectedProductId: null,
	currentPage: 1,
	prev_page: undefined,
	next_page: undefined,
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
		},
		setDisplayedProducts: (state, action: PayloadAction<Product[]>) => {
			state.displayedProducts = action.payload;
		},
		setSelectedProductId: (state, action: PayloadAction<string>) => {
			state.selectedProductId = action.payload;
		},
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
		increaseCurrentPage: (state) => {
			if (state.next_page) {
				state.currentPage = state.currentPage + 1;
			}
		},
		decreaseCurrentPage: (state) => {
			if (state.prev_page) {
				state.currentPage = state.currentPage - 1;
			}
		},
		setPrevPage: (state, action: PayloadAction<string | undefined>) => {
			state.prev_page = action.payload;
		},
		setNextPage: (state, action: PayloadAction<string | undefined>) => {
			state.next_page = action.payload;
		},
		resetProducts: (state) => {
			state.products = initialState.products;
			state.displayedProducts = initialState.displayedProducts;
			state.selectedProductId = initialState.selectedProductId;
			state.currentPage = initialState.currentPage;
			state.prev_page = initialState.prev_page;
			state.next_page = initialState.next_page;
		},
	},
});

export const {
	setProducts,
	setDisplayedProducts,
	setSelectedProductId,
	decreaseCurrentPage,
	increaseCurrentPage,
	setCurrentPage,
	setNextPage,
	setPrevPage,
	resetProducts,
} = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectDisplayedProducts = (state: RootState) => state.products.displayedProducts;
export const selectCurrentPage = (state: RootState) => state.products.currentPage;
export const selectNextPage = (state: RootState) => state.products.next_page;
export const selectPrevPage = (state: RootState) => state.products.prev_page;
export const selectSelectedProductId = (state: RootState) => state.products.selectedProductId;

export default productSlice.reducer;
