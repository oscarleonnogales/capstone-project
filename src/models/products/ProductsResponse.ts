import { ProductsApiResponse } from './ProductsApiResponse';

export type ProductsResponse = {
	productsData: ProductsApiResponse;
	areProductsLoading: boolean;
};
