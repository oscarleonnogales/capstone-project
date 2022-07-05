import { useState, useEffect } from 'react';
import { API_BASE_URL, defaultPageSize } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { ProductsApiResponse } from '../../models/products/ProductsApiResponse';
import { SearchResponse } from '../../models/products/SearchResponse';

const initialState: SearchResponse = {
	searchResults: {
		results: [],
		page: 1,
		next_page: undefined,
		prev_page: undefined,
	},
	isSearchLoading: true,
};

export function useSearch(
	searchTerm: string | null,
	page: number = 1,
	pageSize: number = defaultPageSize
) {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [searchResults, setSearchResults] = useState<SearchResponse>(initialState);

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading || !searchTerm) {
			return () => {};
		}

		const controller = new AbortController();

		async function getProducts() {
			try {
				setSearchResults(initialState);

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22${searchTerm}%22)%5D%5D&lang=en-us&pageSize=${pageSize}&page=${page}`,
					{
						signal: controller.signal,
					}
				);
				const searchResults: ProductsApiResponse = await response.json();

				setSearchResults({ searchResults, isSearchLoading: false });
			} catch (err) {
				setSearchResults({ ...initialState, isSearchLoading: false });
				console.error(err);
			}
		}

		getProducts();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading, page, pageSize, searchTerm]);

	return searchResults;
}
