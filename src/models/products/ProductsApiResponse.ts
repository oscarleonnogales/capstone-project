import { Product } from './Product';

export interface ProductsApiResponse {
	page: number;
	results_per_page?: number;
	results_size?: number;
	total_results_size?: number;
	next_page?: string;
	prev_page?: string;
	results: Product[];
	version?: string;
	license?: string;
}
