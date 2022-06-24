import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/products/Product';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/productSlice';
import './styles/ProductsGrid.scss';

export interface IProductsGridPageProps {
	products: Product[];
}

const ProductsGridPage: React.FunctionComponent<IProductsGridPageProps> = ({ products }) => {
	const dispatch = useDispatch();

	const handleProductSelection = (product: Product): void => {
		dispatch(setSelectedProduct(product));
	};

	return (
		<div className="productsGrid">
			{products.map((product) => (
				<Link
					to="/product-details"
					onClick={() => handleProductSelection(product)}
					className="product"
					key={product.data.sku}
				>
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
