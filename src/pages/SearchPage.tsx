import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingAnimation from '../components/LoadingAnimation';
import ProductsGrid from '../components/ProductsGrid';

import {
	decreaseCurrentPage,
	increaseCurrentPage,
	selectCurrentPage,
	selectNextPage,
	selectPrevPage,
	selectProducts,
	selectSearchTerm,
	setCurrentPage,
	setNextPage,
	setPrevPage,
	setProducts,
} from '../redux/slices/productSlice';
import { useSearch } from '../utils/hooks/useSearch';
import './styles/SearchPage.scss';

const SearchPage: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const searchTerm = useSelector(selectSearchTerm);
	const products = useSelector(selectProducts);
	const currentPage = useSelector(selectCurrentPage);
	const prevPage = useSelector(selectPrevPage);
	const nextPage = useSelector(selectNextPage);

	const { searchResults, isSearchLoading } = useSearch(searchTerm, currentPage);

	useEffect(() => {
		if (!isSearchLoading) {
			dispatch(setProducts(searchResults.results));
			dispatch(setCurrentPage(searchResults.page));
			dispatch(setPrevPage(searchResults.prev_page));
			dispatch(setNextPage(searchResults.next_page));
		}
	}, [dispatch, isSearchLoading, searchResults]);

	const fetchPreviousPage = (): void => {
		dispatch(decreaseCurrentPage());
	};

	const fetchNextPage = (): void => {
		dispatch(increaseCurrentPage());
	};

	if (isSearchLoading) {
		return <LoadingAnimation />;
	}

	return (
		<>
			<Header />
			<div className="main-container">
				<h1 className="page-title">Search Results</h1>
				<ProductsGrid products={products} />

				{products.length === 0 && (
					<p className="page-message">No items found. Please try a different search.</p>
				)}

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
			</div>
			<Footer />
		</>
	);
};

export default SearchPage;
