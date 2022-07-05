import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { ProductsApiResponse } from '../../models/products/ProductsApiResponse';
import { ProductsResponse } from '../../models/products/ProductsResponse';
import { defaultPageSize } from '../constants';

const initialState: ProductsResponse = {
	productsData: {
		results: [],
		page: 1,
		next_page: undefined,
		prev_page: undefined,
	},
	areProductsLoading: true,
};

export function useProducts(page: number = 1, pageSize: number = defaultPageSize) {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [products, setProducts] = useState<ProductsResponse>(initialState);

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			return () => {};
		}

		const controller = new AbortController();

		async function getProducts() {
			try {
				setProducts(initialState);

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}&lang=en-us&pageSize=${pageSize}&page=${page}`,
					{
						signal: controller.signal,
					}
				);
				const productsData: ProductsApiResponse = await response.json();

				setProducts({ productsData, areProductsLoading: false });
			} catch (err) {
				setProducts({ ...initialState, areProductsLoading: false });
				console.error(err);
			}
		}

		getProducts();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading, page, pageSize]);

	return products;
}
