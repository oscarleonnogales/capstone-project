import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/products/Product';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/productSlice';
import './styles/ProductsGrid.scss';
import CartButtons from './CartButtons';

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
				<div className="product" key={product.data.sku}>
					<Link
						className="product-link"
						to="/product-details"
						onClick={() => handleProductSelection(product)}
					>
						<img
							src={product.data.mainimage.url}
							alt={product.data.mainimage.alt}
							className="product-image"
						/>
						<p className="product-name">{product.data.name}</p>
						<p className="product-price">{`$${product.data.price}`}</p>
					</Link>
					<CartButtons product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductsGridPage;
