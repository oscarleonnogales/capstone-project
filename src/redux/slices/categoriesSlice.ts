import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Category } from '../../models/categories/Category';

type CategoryState = {
	categories: Category[];
};

const initialState: CategoryState = {
	categories: [],
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories: (state, action: PayloadAction<Category[]>) => {
			state.categories = action.payload;
		},
		resetCategories: (state) => {
			state.categories = initialState.categories;
		},
	},
});

export const { setCategories, resetCategories } = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories.categories;

export default categoriesSlice.reducer;
