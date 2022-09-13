import { Category } from './Category';

export type CategoriesApiResponse = {
	license?: string;
	next_page?: number;
	page?: number;
	prev_page?: number;
	results: Category[];
	results_per_page?: number;
	results_size?: number;
	total_results_size?: number;
};
