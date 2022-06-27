import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as ContentService from '../services/contentService';
import { Product } from '../models/products/Product';
import { Category } from '../models/categories/Category';
import { FilterHash } from '../models/shared/FilterHash';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductsGrid from '../components/ProductsGrid';
import { useSearchParams } from 'react-router-dom';
import './styles/ProductListingsPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilters } from '../redux/slices/filtersSlice';

const ProductListingsPage: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);

	const [searchParams] = useSearchParams();
	const urlCategoryId = searchParams.get('filterBy');

	// TODO: Add to redux
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	const getFilteredProducts = (): Product[] => {
		return applyFilters()
			? allProducts.filter((product) => filters[product.data.category.id])
			: allProducts;
	};

	const applyFilters = (): boolean => {
		return Object.values(filters).includes(true);
	};

	const getOriginalFilters = (categoryIds: string[], urlCategoryId: string | null): FilterHash => {
		const newFilters: FilterHash = {};
		categoryIds.forEach((catId) => {
			if (catId === urlCategoryId) {
				newFilters[catId] = true;
			} else {
				newFilters[catId] = false;
			}
		});
		return newFilters;
	};

	useEffect(() => {
		const setOriginalState = async () => {
			// FIXME: Is there a better way to do this?
			const productResponse = await ContentService.fetchProducts();
			setAllProducts(productResponse);

			const responseCategories = await ContentService.fetchCategories();
			const categoryIds = responseCategories.map((category) => category.id);

			setCategories(responseCategories);
			dispatch(setFilters(getOriginalFilters(categoryIds, urlCategoryId)));
		};
		setOriginalState();
	}, [dispatch, urlCategoryId]);

	useEffect(() => {
		setDisplayedProducts(() => getFilteredProducts());
	}, [filters]);

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
