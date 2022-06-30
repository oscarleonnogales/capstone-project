import React from 'react';

import { Product } from '../models/products/Product';
import ProductElement from './ProductElement';
import './styles/ProductsGrid.scss';

export interface IProductsGridPageProps {
	products: Product[];
}

const ProductsGridPage: React.FunctionComponent<IProductsGridPageProps> = ({ products }) => {
	return (
		<div className="productsGrid">
			{products.map((product) => (
				<ProductElement product={product} key={product.id} />
			))}
		</div>
	);
};

export default ProductsGridPage;
