import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../models/products/Product';

type ProductState = {
	products: Product[];
	searchTerm: string | null;
	selectedProductId: string | null;
	currentPage: number;
	prev_page: string | undefined;
	next_page: string | undefined;
};

const initialState: ProductState = {
	products: [],
	searchTerm: null,
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
		setSearchTerm: (state, action: PayloadAction<string | null>) => {
			state.searchTerm = action.payload;
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
			state.searchTerm = initialState.searchTerm;
			state.selectedProductId = initialState.selectedProductId;
			state.currentPage = initialState.currentPage;
			state.prev_page = initialState.prev_page;
			state.next_page = initialState.next_page;
		},
	},
});

export const {
	setProducts,
	setSearchTerm,
	setSelectedProductId,
	decreaseCurrentPage,
	increaseCurrentPage,
	setCurrentPage,
	setNextPage,
	setPrevPage,
	resetProducts,
} = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectSearchTerm = (state: RootState) => state.products.searchTerm;
export const selectCurrentPage = (state: RootState) => state.products.currentPage;
export const selectNextPage = (state: RootState) => state.products.next_page;
export const selectPrevPage = (state: RootState) => state.products.prev_page;
export const selectSelectedProductId = (state: RootState) => state.products.selectedProductId;

export default productSlice.reducer;
