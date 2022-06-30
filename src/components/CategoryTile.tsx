import React from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../models/categories/Category';

import { CATEGORIES } from '../utils/constants';

export interface ICategoryTileProps {
	category: Category;
	index: number;
}

const CategoryTile: React.FunctionComponent<ICategoryTileProps> = ({ category, index }) => {
	return category ? (
		<Link
			to={`/products?${CATEGORIES}=${category.slugs[0].toLowerCase()}`}
			className={`category cat-${index}`}
			style={{
				backgroundImage: `url(${category.data.main_image.url})`,
			}}
		>
			<div className="category-name">{category.data.name}</div>
			<div className="category-overlay" />
		</Link>
	) : null;
};

export default CategoryTile;
