import { ProductsApiResponse } from './ProductsApiResponse';

export type SearchResponse = {
	searchResults: ProductsApiResponse;
	isSearchLoading: boolean;
};
