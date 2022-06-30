import React from 'react';
import { useDispatch } from 'react-redux';

import { Category } from '../models/categories/Category';
import { FilterHash } from '../models/shared/FilterHash';

import { changeFilters, setFilters } from '../redux/slices/filtersSlice';
import './styles/CategoriesFilter.scss';

export interface ICategoriesFilterPageProps {
	categories: Category[];
	filters: FilterHash;
}

const CategoriesFilterPage: React.FunctionComponent<ICategoriesFilterPageProps> = ({
	categories,
	filters,
}) => {
	const dispatch = useDispatch();

	const handleFilterChange = (event: React.SyntheticEvent): void => {
		event.preventDefault();
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
			{categories.map((category) => (
				<div className="sidebar-element" key={category.data.name}>
					<input
						className="sidebar-checkbox"
						name={category.slugs[0]}
						type="checkbox"
						onChange={(event) => handleFilterChange(event)}
						checked={filters[category.slugs[0]] || false}
					/>
					<label className="sidebar-label" htmlFor={category.data.name}>
						{category.data.name}
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
