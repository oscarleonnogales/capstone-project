import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedBanner from '../components/FeaturedBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/CategoriesGrid';
import * as ContentService from '../services/contentService';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useDispatch, useSelector } from 'react-redux';
import {
	setBanners,
	selectBanners,
	selectCurrentIndex,
	incrementIndex,
} from '../redux/slices/bannersSlice';
import { setProducts, selectProducts } from '../redux/slices/productSlice';
import { setCategories, selectCategories } from '../redux/slices/categoriesSlice';
import './styles/HomePage.scss';

export interface IHomeProps {}

const HomePage: React.FunctionComponent<IHomeProps> = (props) => {
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);
	const categories = useSelector(selectCategories);
	const banners = useSelector(selectBanners);
	const currentIndex = useSelector(selectCurrentIndex);

	const { data, isLoading } = useFeaturedBanners();

	useEffect(() => {
		const interval: NodeJS.Timer = setInterval(() => {
			dispatch(incrementIndex());
		}, 3500);
		return () => {
			clearInterval(interval);
		};
	}, [dispatch]);

	useEffect(() => {
		if (!isLoading) {
			dispatch(setBanners(data.results));
			ContentService.fetchProducts().then((res) => dispatch(setProducts(res)));
			dispatch(setCategories(ContentService.fetchCategories()));
		}
	}, [data.results, dispatch, isLoading]);

	return (
		<>
			<Header />
			<div className="main-container">
				<FeaturedBanner featuredBanner={banners[currentIndex]} />
				<Categories categories={categories} />
				<FeaturedProducts products={products} />
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
