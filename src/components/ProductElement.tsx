import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Product } from '../models/products/Product';

import CartButtons from './CartButtons';

import { setSelectedProductId } from '../redux/slices/productSlice';

export interface IProductElementProps {
	product: Product;
}

const ProductElement: React.FunctionComponent<IProductElementProps> = ({ product }) => {
	const dispatch = useDispatch();

	const handleProductSelection = (product: Product): void => {
		dispatch(setSelectedProductId(product.id));
	};

	const formatCategory = (word: string): string => {
		return word.charAt(0).toUpperCase() + word.slice(1).split('--').join(' & ');
	};

	return (
		<div className="product" key={product.data.sku}>
			<Link
				className="product-link"
				to={`/product/${product.id}`}
				onClick={() => handleProductSelection(product)}
			>
				<img
					src={product.data.mainimage.url}
					alt={product.data.mainimage.alt}
					className="product-image"
				/>
				<p className="product-name">{product.data.name}</p>
				<p className="product-price">{`$${product.data.price}`}</p>
				<p className="product-category">{formatCategory(product.data.category.slug)}</p>
			</Link>
			<CartButtons product={product} />
		</div>
	);
};

export default ProductElement;
