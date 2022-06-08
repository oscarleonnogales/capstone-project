import React from 'react';
import { Product } from '../models/Product';
import './styles/ProductsGrid.scss';

export interface IProductsGridProps {
	products?: Product[];
}

const ProductsGrid: React.FunctionComponent<IProductsGridProps> = ({ products }) => {
	return <div className="productsGrid">ProductsGrid placeholder</div>;
};

export default ProductsGrid;
