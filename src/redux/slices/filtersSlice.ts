import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FilterHash } from '../../models/shared/FilterHash';

interface FilterState {
	filters: FilterHash;
}

const initialState: FilterState = {
	filters: {},
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilters: (state, action: PayloadAction<FilterHash>) => {
			state.filters = action.payload;
		},
		changeFilters: (state, action: PayloadAction<FilterHash>) => {
			state.filters = { ...state.filters, ...action.payload };
		},
		resetFilters: (state) => {
			state.filters = initialState.filters;
		},
	},
});

export const { setFilters, changeFilters, resetFilters } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;

export default filtersSlice.reducer;
