import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '../models/products/Product';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoriesFilter from '../components/CategoriesFilter';
import LoadingAnimation from '../components/LoadingAnimation';
import ProductsGrid from '../components/ProductsGrid';

import { selectApplyFilters, selectFilters, setFilters } from '../redux/slices/filtersSlice';
import {
	decreaseCurrentPage,
	increaseCurrentPage,
	selectCurrentPage,
	selectNextPage,
	selectPrevPage,
	selectProducts,
	setCurrentPage,
	setNextPage,
	setPrevPage,
	setProducts,
} from '../redux/slices/productSlice';
import { selectCategories, setCategories } from '../redux/slices/categoriesSlice';
import { useProducts } from '../utils/hooks/useProducts';
import { useCategories } from '../utils/hooks/useCategories';
import { CATEGORIES } from '../utils/constants';
import { getOriginalFilters } from '../utils/services/filterService';
import './styles/ProductListingsPage.scss';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

const ProductListingsPage: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);
	const applyFilters = useSelector(selectApplyFilters);
	const products = useSelector(selectProducts);
	const categories = useSelector(selectCategories);
	const currentPage = useSelector(selectCurrentPage);
	const prevPage = useSelector(selectPrevPage);
	const nextPage = useSelector(selectNextPage);

	const [searchParams] = useSearchParams();
	const { productsData, areProductsLoading } = useProducts(currentPage);
	const { categoriesData, areCategoriesLoading } = useCategories();
	const { width } = useWindowDimensions();

	let isMobile: boolean = useMemo(() => (width <= 689 ? true : false), [width]);
	const displayedProducts: Product[] = useMemo(
		() =>
			applyFilters
				? products.filter((product) => filters[product?.data?.category?.slug])
				: products,
		[applyFilters, filters, products]
	);

	useEffect(() => {
		dispatch(setCurrentPage(1));
	}, [dispatch]);

	useEffect(() => {
		if (!areProductsLoading) {
			dispatch(setProducts(productsData.results));
			dispatch(setCurrentPage(productsData.page));
			dispatch(setPrevPage(productsData.prev_page));
			dispatch(setNextPage(productsData.next_page));
		}
	}, [areProductsLoading, dispatch, productsData]);

	useEffect(() => {
		if (!areCategoriesLoading) {
			dispatch(setCategories(categoriesData.results));
		}
	}, [areCategoriesLoading, dispatch, categoriesData.results]);

	useEffect(() => {
		const urlCategorySlug = searchParams.get(CATEGORIES);
		const categorySlugs: string[] = categories.map((category) => category.slugs[0]);
		dispatch(setFilters(getOriginalFilters(categorySlugs, urlCategorySlug)));
	}, [categories, dispatch, searchParams]);

	const fetchPreviousPage = (): void => {
		dispatch(decreaseCurrentPage());
	};

	const fetchNextPage = (): void => {
		dispatch(increaseCurrentPage());
	};

	if (areProductsLoading || areCategoriesLoading) {
		return <LoadingAnimation />;
	}

	return (
		<>
			<Header />
			<div className="product-listings-page main-container">
				{!isMobile && <CategoriesFilter filters={filters} />}
				<ProductsGrid products={displayedProducts} />
			</div>
			<div className="pagination-btn-container">
				{prevPage && (
					<div className="btn previous-btn" onClick={fetchPreviousPage}>
						Previous
					</div>
				)}
				{nextPage && (
					<div className="btn next-btn" onClick={fetchNextPage}>
						Next
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default ProductListingsPage;
