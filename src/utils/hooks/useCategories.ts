import { useState, useEffect } from 'react';
import { API_BASE_URL, CATEGORIES_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { CategoriesApiResponse } from '../../models/categories/CategoriesApiResponse';
import { CategoriesResponse } from '../../models/categories/CategoriesResponse';

export function useCategories() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [categories, setCategories] = useState<CategoriesResponse>({
		categoriesData: {
			results: [],
		},
		areCategoriesLoading: true,
	});

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			return () => {};
		}

		const controller = new AbortController();

		async function getProducts() {
			try {
				setCategories({ categoriesData: { results: [] }, areCategoriesLoading: true });

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}${CATEGORIES_URL}`,
					{
						signal: controller.signal,
					}
				);
				const categoriesData: CategoriesApiResponse = await response.json();

				setCategories({ categoriesData, areCategoriesLoading: false });
			} catch (err) {
				setCategories({ categoriesData: { results: [] }, areCategoriesLoading: false });
				console.error(err);
			}
		}

		getProducts();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading]);

	return categories;
}
