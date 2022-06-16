import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as ContentService from '../services/contentService';
import { Product } from '../models/Product';
import './styles/ProductListings.scss';
import { Category } from '../models/Category';
import { FilterHash } from '../models/FilterHash';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductsGrid from '../components/ProductsGrid';

const ProductListings: React.FunctionComponent = () => {
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
	const [filters, setFilters] = useState<FilterHash>({});

	const getFilteredProducts = (): Product[] => {
		return applyFilters()
			? allProducts.filter((product) => filters[product.data.category.id])
			: allProducts;
	};

	const applyFilters = (): boolean => {
		return Object.values(filters).includes(true);
	};

	const handleFilterChange = (event: React.SyntheticEvent): void => {
		event.preventDefault();
		const target = event.target as HTMLInputElement;
		setFilters((filters) => ({ ...filters, [target.name]: target.checked }));
	};

	useEffect(() => {
		ContentService.fetchProducts().then((res) => {
			setAllProducts(res);
			setDisplayedProducts(res);
		});

		// TODO: Change when fetching from an API
		setCategories(ContentService.fetchCategories());
	}, []);

	useEffect(() => {
		const newFilters: FilterHash = {};
		categories.forEach((category) => {
			newFilters[category.id] = false;
		});
		setFilters(newFilters);
	}, [categories]);

	useEffect(() => {
		setDisplayedProducts(() => getFilteredProducts());
	}, [filters]);

	return (
		<>
			<Header />
			<div className="product-listings-page main-container">
				<CategoriesFilter
					categories={categories}
					handleFilterChange={handleFilterChange}
					filters={filters}
				/>
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

export default ProductListings;
