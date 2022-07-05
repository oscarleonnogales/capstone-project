import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { ProductsApiResponse } from '../../models/products/ProductsApiResponse';
import { ProductDetailsResponse } from '../../models/products/ProductDetailsResponse';

export function useProductDetails(productId: string | null, page: number = 1) {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [productDetails, setProductDetails] = useState<ProductDetailsResponse>({
		productDetailsData: {
			results: [],
			page,
		},
		areProductDetailsLoading: true,
	});

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading || !productId) {
			return () => {};
		}

		const controller = new AbortController();

		async function getProducts() {
			try {
				setProductDetails({
					productDetailsData: { results: [], page },
					areProductDetailsLoading: true,
				});

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`,
					{
						signal: controller.signal,
					}
				);
				const productDetailsData: ProductsApiResponse = await response.json();

				setProductDetails({ productDetailsData, areProductDetailsLoading: false });
			} catch (err) {
				setProductDetails({
					productDetailsData: { results: [], page },
					areProductDetailsLoading: false,
				});
				console.error(err);
			}
		}

		getProducts();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading, page, productId]);

	return productDetails;
}
