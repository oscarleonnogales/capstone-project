import { ProductsApiResponse } from './ProductsApiResponse';

export interface ProductsResponse {
	productsData: ProductsApiResponse;
	areProductsLoading: boolean;
}
