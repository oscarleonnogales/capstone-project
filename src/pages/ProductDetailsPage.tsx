import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Product } from '../models/products/Product';
import './styles/ProductDetailsPage.scss';

export interface IProductDetailsPagePageProps {
	product: Product;
}

const ProductDetailsPagePage: React.FunctionComponent<IProductDetailsPagePageProps> = ({
	product,
}) => {
	return (
		<>
			<Header />
			<div className="main-container">{product.data.name}</div>
			<Footer />
		</>
	);
};

export default ProductDetailsPagePage;
