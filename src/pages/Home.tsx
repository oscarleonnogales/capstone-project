import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/CategoriesGrid';
import * as ContentService from '../services/contentService';
import { Banner } from '../models/Banner';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import './styles/Home.scss';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	const [banners, setBanners] = useState<Banner[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		ContentService.fetchBanners().then((res) => setBanners(res));
		ContentService.fetchProducts().then((res) => setProducts(res));

		// TODO: Change when fetching from an API
		setCategories(ContentService.fetchCategories());
	}, []);

	useEffect(() => {
		console.log(categories);
	}, [categories]);

	return (
		<>
			<Header />
			<Slider banners={banners} />
			<Categories categories={categories} />
			<FeaturedProducts products={products} />
			<Footer />
		</>
	);
};

export default Home;
