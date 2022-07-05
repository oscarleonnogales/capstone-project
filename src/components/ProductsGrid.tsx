import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { Product } from '../models/products/Product';
import ProductElement from './ProductElement';
import './styles/ProductsGrid.scss';

export interface IProductsGridPageProps {
	products: Product[];
}

function ErrorFallback() {
	return <></>;
}

const ProductsGridPage: React.FunctionComponent<IProductsGridPageProps> = ({ products }) => {
	return (
		<div className="productsGrid">
			{products.map((product) => (
				<ErrorBoundary FallbackComponent={ErrorFallback} key={product.id}>
					<ProductElement product={product} />
				</ErrorBoundary>
			))}
		</div>
	);
};

export default ProductsGridPage;
