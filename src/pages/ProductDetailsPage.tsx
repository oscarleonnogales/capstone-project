import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../redux/slices/productSlice';
import './styles/ProductDetailsPage.scss';

export interface IProductDetailsPageProps {}

const ProductDetailsPage: React.FunctionComponent<IProductDetailsPageProps> = () => {
	const product = useSelector(selectSelectedProduct);

	return (
		<>
			<Header />
			{product && <div className="main-container">{product.data.name}</div>}
			<Footer />
		</>
	);
};

export default ProductDetailsPage;
