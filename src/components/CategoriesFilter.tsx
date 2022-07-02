import React from 'react';
import { useDispatch } from 'react-redux';

import { FilterHash } from '../models/shared/FilterHash';

import { changeFilters, setFilters } from '../redux/slices/filtersSlice';
import { formatCategory } from '../utils/services/categoriesService';
import './styles/CategoriesFilter.scss';

export interface ICategoriesFilterPageProps {
	filters: FilterHash;
}

// FIXME: How can I prevent unnecessary re-renders?
const CategoriesFilterPage: React.FunctionComponent<ICategoriesFilterPageProps> = ({ filters }) => {
	const dispatch = useDispatch();

	const handleFilterChange = (event: React.SyntheticEvent): void => {
		const target = event.target as HTMLInputElement;
		dispatch(changeFilters({ [target.name]: target.checked }));
	};

	const clearFilters = (): void => {
		const initialState: FilterHash = {};
		Object.keys(filters).forEach((filterSlug) => {
			initialState[filterSlug] = false;
		});
		dispatch(setFilters(initialState));
	};

	return (
		<div className="categories-sidebar">
			<p className="sidebar-title">Filter by Category</p>
			{Object.keys(filters).map((filter) => (
				<div className="sidebar-element" key={filter}>
					<input
						className="sidebar-checkbox"
						name={filter}
						type="checkbox"
						onChange={(event) => handleFilterChange(event)}
						checked={filters[filter]}
					/>
					<label className="sidebar-label" htmlFor={filter}>
						{formatCategory(filter)}
					</label>
				</div>
			))}
			<button className="btn reset-filters-btn" onClick={clearFilters}>
				Clear Filters
			</button>
		</div>
	);
};

export default CategoriesFilterPage;
