import React from 'react';
import { Product } from '../models/products/Product';
import './styles/ProductsGrid.scss';

export interface IProductsGridPageProps {
	products: Product[];
}

const ProductsGridPage: React.FunctionComponent<IProductsGridPageProps> = ({ products }) => {
	return (
		<div className="productsGrid">
			{products.map((product) => (
				// TODO: Make these a link that points to the product details page
				<a className="product" href="#" key={product.data.sku}>
					<img
						src={product.data.mainimage.url}
						alt={product.data.mainimage.alt}
						className="product-image"
					/>
					<p className="product-name">{product.data.name}</p>
					<p className="product-price">{`$${product.data.price}`}</p>
				</a>
			))}
		</div>
	);
};

export default ProductsGridPage;
