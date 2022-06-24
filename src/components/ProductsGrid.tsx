import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/products/Product';
import './styles/ProductsGrid.scss';

export interface IProductsGridPageProps {
	products: Product[];
}

const ProductsGridPage: React.FunctionComponent<IProductsGridPageProps> = ({ products }) => {
	return (
		<div className="productsGrid">
			{products.map((product) => (
				// FIXME: How can I pass props?
				// Don't pass props, use redux
				<Link to="/product-details" className="product" key={product.data.sku}>
					<img
						src={product.data.mainimage.url}
						alt={product.data.mainimage.alt}
						className="product-image"
					/>
					<p className="product-name">{product.data.name}</p>
					<p className="product-price">{`$${product.data.price}`}</p>
				</Link>
			))}
		</div>
	);
};

export default ProductsGridPage;
