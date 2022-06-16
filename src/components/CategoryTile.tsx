import React from 'react';
import { Category } from '../models/Category';

export interface ICategoryTileProps {
	category: Category;
	index: number;
}

const CategoryTile: React.FunctionComponent<ICategoryTileProps> = ({ category, index }) => {
	return category ? (
		<div
			className={`category cat-${index}`}
			style={{
				backgroundImage: `url(${category.data.main_image.url})`,
			}}
		>
			{/* TODO: Change to product listings page with filter */}
			<a href="/" className="category-link">
				{category.data.name}
			</a>
			<div className="category-overlay" />
		</div>
	) : null;
};

export default CategoryTile;
