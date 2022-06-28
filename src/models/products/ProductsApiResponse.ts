import { Product } from './Product';

export interface ProductsApiResponse {
	license?: string;
	next_page?: number;
	page?: number;
	prev_page?: number;
	results: Product[];
	results_per_page?: number;
	results_size?: number;
	total_results_size?: number;
}
