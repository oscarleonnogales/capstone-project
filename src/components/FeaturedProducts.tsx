import React from 'react';
import { Link } from 'react-router-dom';

import { Product } from '../models/products/Product';

import ProductsGrid from './ProductsGrid';

export interface IFeaturedProductsProps {
	products: Product[];
}

const FeaturedProducts: React.FunctionComponent<IFeaturedProductsProps> = ({ products }) => {
	return (
		<>
			<ProductsGrid products={products} />
			<div className="horizontal-center">
				<Link to="/products">
					<button className="btn">View All Products</button>
				</Link>
			</div>
		</>
	);
};

export default FeaturedProducts;
