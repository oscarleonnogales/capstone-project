import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Product } from '../models/products/Product';

import CartButtons from './CartButtons';

import { setSelectedProductId } from '../redux/slices/productSlice';
import { formatCategory } from '../utils/services/categoriesService';

export type ProductElementProps = {
	product: Product;
};

const ProductElement: React.FunctionComponent<ProductElementProps> = ({ product }) => {
	const dispatch = useDispatch();

	const handleProductSelection = (product: Product): void => {
		dispatch(setSelectedProductId(product.id));
	};

	const validateProduct = (product: Product): boolean => {
		if (
			!product?.id ||
			!product?.data?.sku ||
			!product?.data?.mainimage?.url ||
			!product?.data?.mainimage?.alt ||
			!product?.data?.name ||
			!product?.data?.price ||
			!product?.data?.category?.slug
		) {
			return false;
		} else {
			return true;
		}
	};

	if (!validateProduct(product)) {
		return <></>;
	}

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
			<CartButtons product={product} showRemoveFromCartBtn={false} />
		</div>
	);
};

export default ProductElement;
