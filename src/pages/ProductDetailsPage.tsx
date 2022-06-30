import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingAnimation from '../components/LoadingAnimation';

import { Product } from '../models/products/Product';

import { selectSelectedProductId } from '../redux/slices/productSlice';
import { useProductDetails } from '../utils/hooks/useProductDetails';
import './styles/ProductDetailsPage.scss';

const ProductDetailsPage: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const selectedProductId = useSelector(selectSelectedProductId);
	const { productDetailsData, areProductDetailsLoading } = useProductDetails(selectedProductId);

	const [product, setProduct] = useState<Product>();

	useEffect(() => {
		if (!areProductDetailsLoading) {
			setProduct(productDetailsData.results[0]);
		}
	}, [areProductDetailsLoading, productDetailsData.results]);

	if (areProductDetailsLoading) {
		return <LoadingAnimation />;
	}

	return (
		<>
			<Header />
			{product && <div className="main-container">{product.data.name}</div>}
			<Footer />
		</>
	);
};

export default ProductDetailsPage;
