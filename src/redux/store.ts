import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import bannersReducer from './slices/bannersSlice';
import categoriesReducer from './slices/categoriesSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		banners: bannersReducer,
		categories: categoriesReducer,
		filters: filtersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
