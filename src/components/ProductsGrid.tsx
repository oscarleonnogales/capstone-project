import React from 'react';
import { Product } from '../models/Product';
import './styles/ProductsGrid.scss';

export interface IProductsGridProps {
	products: Product[];
}

const ProductsGrid: React.FunctionComponent<IProductsGridProps> = ({ products }) => {
	return (
		<div className="productsGrid">
			{products.map((product) => (
				<div className="grid-product" key={product.data.mainimage.alt}>
					<img
						src={product.data.mainimage.url}
						alt={product.data.mainimage.alt}
						className="grid-image"
					/>
					<p className="product-name">{product.data.name}</p>
					<p className="product-price">{`$${product.data.price}`}</p>
				</div>
			))}
		</div>
	);
};

export default ProductsGrid;
