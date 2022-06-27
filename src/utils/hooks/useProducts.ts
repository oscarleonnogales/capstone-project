import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { ProductsApiResponse } from '../../models/products/ProductsApiResponse';
import { ProductsResponse } from '../../models/products/ProductsResponse';
import { productsURL } from '../../config/apiURLs';

export function useProducts() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [products, setProducts] = useState<ProductsResponse>({
		productsData: {
			results: [],
		},
		areProductsLoading: true,
	});

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			return () => {};
		}

		const controller = new AbortController();

		async function getProducts() {
			try {
				setProducts({ productsData: { results: [] }, areProductsLoading: true });

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}${productsURL}`,
					{
						signal: controller.signal,
					}
				);
				const productsData: ProductsApiResponse = await response.json();

				setProducts({ productsData, areProductsLoading: false });
			} catch (err) {
				setProducts({ productsData: { results: [] }, areProductsLoading: false });
				console.error(err);
			}
		}

		getProducts();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading]);

	return products;
}
