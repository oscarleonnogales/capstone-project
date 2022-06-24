import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedBanner from '../components/FeaturedBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/CategoriesGrid';
import * as ContentService from '../services/contentService';
import { Banner } from '../models/banners/Banner';
import { Product } from '../models/products/Product';
import { Category } from '../models/categories/Category';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import './styles/Home.scss';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	const [banners, setBanners] = useState<Banner[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const { data, isLoading } = useFeaturedBanners();

	useEffect(() => {
		if (!isLoading) {
			setBanners(data.results);
			ContentService.fetchProducts().then((res) => setProducts(res));

			// TODO: Change when fetching from an API
			setCategories(ContentService.fetchCategories());
		}
	}, [data.results, isLoading]);

	return (
		<>
			<Header />
			<div className="main-container">
				<FeaturedBanner banners={banners} />
				<Categories categories={categories} />
				<FeaturedProducts products={products} />
			</div>
			<Footer />
		</>
	);
};

export default Home;
