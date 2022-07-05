import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FilterHash } from '../../models/shared/FilterHash';

interface FilterState {
	filters: FilterHash;
	applyFilters: boolean;
}

const initialState: FilterState = {
	filters: {},
	applyFilters: false,
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilters: (state, action: PayloadAction<FilterHash>) => {
			state.filters = action.payload;
			state.applyFilters = Object.values(state.filters).includes(true);
		},
		changeFilters: (state, action: PayloadAction<FilterHash>) => {
			state.filters = { ...state.filters, ...action.payload };
			state.applyFilters = Object.values(state.filters).includes(true);
		},
		resetFilters: (state) => {
			state.filters = initialState.filters;
			state.applyFilters = initialState.applyFilters;
		},
	},
});

export const { setFilters, changeFilters, resetFilters } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;
export const selectApplyFilters = (state: RootState) => state.filters.applyFilters;

export default filtersSlice.reducer;
