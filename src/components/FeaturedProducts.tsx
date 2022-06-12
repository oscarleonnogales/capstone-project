import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/Product';
import './styles/FeaturedProducts.scss';

export interface IFeaturedProductsProps {
	products: Product[];
}

const FeaturedProducts: React.FunctionComponent<IFeaturedProductsProps> = ({ products }) => {
	return (
		<>
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
			<div className="horizontal-center">
				<Link to="/products" className="view-all-btn">
					<button className="btn">View All Products</button>
				</Link>
			</div>
		</>
	);
};

export default FeaturedProducts;
