import { ProductsApiResponse } from './ProductsApiResponse';

export type ProductDetailsResponse = {
	productDetailsData: ProductsApiResponse;
	areProductDetailsLoading: boolean;
};
