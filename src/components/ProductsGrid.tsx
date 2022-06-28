import React from 'react';
import { Product } from '../models/products/Product';
import './styles/ProductsGrid.scss';
import ProductElement from './ProductElement';

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
