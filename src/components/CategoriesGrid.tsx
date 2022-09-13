import React from 'react';

import { Category } from '../models/categories/Category';

import CategoryTile from './CategoryTile';
import './styles/CategoriesGrid.scss';

export type CategoriesGridProps = {
	categories: Category[];
};

const CategoriesGrid: React.FunctionComponent<CategoriesGridProps> = ({ categories }) => {
	return (
		<div className="categoriesGrid">
			{categories.map((category, index) => (
				<CategoryTile key={category.id} category={category} index={index} />
			))}
		</div>
	);
};

export default CategoriesGrid;
