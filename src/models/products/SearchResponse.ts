import { ProductsApiResponse } from './ProductsApiResponse';

export interface SearchResponse {
	searchResults: ProductsApiResponse;
	isSearchLoading: boolean;
}
