import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { BannerApiResponse } from '../../models/banners/BannerApiResponse';
import { FeaturedBannersResponse } from '../../models/banners/FeaturedBannersResponse';
import { featuredBannersURL } from '../../config/apiURLs';

export function useFeaturedBanners() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [featuredBanners, setFeaturedBanners] = useState<FeaturedBannersResponse>({
		data: {
			results: [],
		},
		isLoading: true,
	});

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			return () => {};
		}

		const controller = new AbortController();

		async function getFeaturedBanners() {
			try {
				setFeaturedBanners({ data: { results: [] }, isLoading: true });

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}${featuredBannersURL}`,
					{
						signal: controller.signal,
					}
				);
				const data: BannerApiResponse = await response.json();

				setFeaturedBanners({ data, isLoading: false });
			} catch (err) {
				setFeaturedBanners({ data: { results: [] }, isLoading: false });
				console.error(err);
			}
		}

		getFeaturedBanners();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading]);

	return featuredBanners;
}
