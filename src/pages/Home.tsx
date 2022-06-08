import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import ProductsGrid from '../components/ProductsGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import * as ContentService from '../services/contentService';
import { Banner } from '../models/Banner';
import { Product } from '../models/Product';
import './styles/Home.scss';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	const [banners, setBanners] = useState<Banner[]>();
	const [products, setProducts] = useState<Product[]>();

	useEffect(() => {
		ContentService.fetchBanners().then((res) => setBanners(res));
		ContentService.fetchProducts().then((res) => setProducts(res));
	}, []);

	return (
		<>
			<Header />
			<Slider banners={banners || []} />
			<ProductsGrid products={products || []} />
			<FeaturedProducts />
			<Footer />
		</>
	);
};

export default Home;
