import { ProductsApiResponse } from './ProductsApiResponse';

export interface ProductDetailsResponse {
	productDetailsData: ProductsApiResponse;
	areProductDetailsLoading: boolean;
}
