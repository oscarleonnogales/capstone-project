import React from 'react';
import { Category } from '../models/categories/Category';
import { FilterHash } from '../models/shared/FilterHash';
import './styles/CategoriesFilter.scss';

export interface ICategoriesFilterPageProps {
	categories: Category[];
	filters: FilterHash;
	handleFilterChange: (event: React.SyntheticEvent) => void;
}

const CategoriesFilterPage: React.FunctionComponent<ICategoriesFilterPageProps> = ({
	categories,
	filters,
	handleFilterChange,
}) => {
	return (
		<div className="categories-sidebar">
			<p className="sidebar-title">Filter by Category</p>
			{categories.map((category) => (
				<div className="sidebar-element" key={category.data.name}>
					<input
						className="sidebar-checkbox"
						name={category.id}
						type="checkbox"
						onChange={handleFilterChange}
						checked={filters[category.id] || false}
					/>
					<label className="sidebar-label" htmlFor={category.data.name}>
						{category.data.name}
					</label>
				</div>
			))}
		</div>
	);
};

export default CategoriesFilterPage;
