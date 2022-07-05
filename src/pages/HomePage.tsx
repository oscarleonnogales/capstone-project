import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingAnimation from '../components/LoadingAnimation';
import ImageSlider from '../components/ImageSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/CategoriesGrid';

import {
	setBanners,
	selectBanners,
	selectCurrentIndex,
	incrementIndex,
	decrementIndex,
} from '../redux/slices/bannersSlice';
import { setProducts, selectProducts } from '../redux/slices/productSlice';
import { setCategories, selectCategories } from '../redux/slices/categoriesSlice';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useProducts } from '../utils/hooks/useProducts';
import { useCategories } from '../utils/hooks/useCategories';

export interface IHomeProps {}

const HomePage: React.FunctionComponent<IHomeProps> = (props) => {
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);
	const categories = useSelector(selectCategories);
	const banners = useSelector(selectBanners);
	const currentIndex = useSelector(selectCurrentIndex);

	const { data, isLoading } = useFeaturedBanners();
	const { productsData, areProductsLoading } = useProducts();
	const { categoriesData, areCategoriesLoading } = useCategories();

	const handleNextBannerIndex = (): void => {
		dispatch(incrementIndex());
	};

	const handlePreviousBannerIndex = (): void => {
		dispatch(decrementIndex());
	};

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
		}
	}, [data.results, dispatch, isLoading]);

	useEffect(() => {
		if (!areProductsLoading) {
			dispatch(setProducts(productsData.results));
		}
	}, [areProductsLoading, dispatch, productsData.results]);

	useEffect(() => {
		if (!areCategoriesLoading) {
			dispatch(setCategories(categoriesData.results));
		}
	}, [areCategoriesLoading, dispatch, categoriesData.results]);

	if (isLoading || areProductsLoading || areCategoriesLoading) {
		return <LoadingAnimation />;
	}

	return (
		<>
			<Header />
			<div className="main-container">
				<ImageSlider
					displayedImage={banners[currentIndex].data.main_image}
					handleNextClick={handleNextBannerIndex}
					handlePreviousClick={handlePreviousBannerIndex}
				/>
				<Categories categories={categories} />
				<FeaturedProducts products={products} />
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
