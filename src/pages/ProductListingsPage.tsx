import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Product } from '../models/products/Product';
import { FilterHash } from '../models/shared/FilterHash';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductsGrid from '../components/ProductsGrid';
import { useSearchParams } from 'react-router-dom';
import './styles/ProductListingsPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilters } from '../redux/slices/filtersSlice';
import { useProducts } from '../utils/hooks/useProducts';
import { useCategories } from '../utils/hooks/useCategories';
import { selectProducts, setProducts } from '../redux/slices/productSlice';
import { selectCategories, setCategories } from '../redux/slices/categoriesSlice';
import { CATEGORIES } from '../utils/constants';

const ProductListingsPage: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);
	const products = useSelector(selectProducts);
	const categories = useSelector(selectCategories);

	const [searchParams] = useSearchParams();
	const urlCategorySlug = searchParams.get(CATEGORIES);

	const { productsData, areProductsLoading } = useProducts();
	const { categoriesData, areCategoriesLoading } = useCategories();

	const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

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

	useEffect(() => {
		const categorySlugs: string[] = categories.map((category) => category.slugs[0]);
		dispatch(setFilters(getOriginalFilters(categorySlugs, urlCategorySlug)));
	}, [categories, dispatch, urlCategorySlug]);

	useEffect(() => {
		// FIXME: Put function in the dependency array?
		setDisplayedProducts(() => getFilteredProducts());
	}, [filters, products]);

	const applyFilters = (): boolean => {
		return Object.values(filters).includes(true);
	};

	const getFilteredProducts = (): Product[] => {
		return applyFilters()
			? products.filter((product) => filters[product.data.category.slug])
			: products;
	};

	const getOriginalFilters = (
		categorySlugs: string[],
		urlCategorySlug: string | null
	): FilterHash => {
		const newFilters: FilterHash = {};
		categorySlugs.forEach((slug) => {
			if (slug === urlCategorySlug) {
				newFilters[slug] = true;
			} else {
				newFilters[slug] = false;
			}
		});
		return newFilters;
	};

	return (
		<>
			<Header />
			<div className="product-listings-page main-container">
				<CategoriesFilter categories={categories} filters={filters} />
				<ProductsGrid products={displayedProducts} />
			</div>
			<div className="pagination-btn-container">
				<div className="btn previous-btn">Previous</div>
				<div className="btn next-btn">Next</div>
			</div>
			<Footer />
		</>
	);
};

export default ProductListingsPage;
