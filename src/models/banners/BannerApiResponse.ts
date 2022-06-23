import { Banner } from './Banner';

export interface BannerApiResponse {
	license?: string;
	next_page?: number;
	page?: number;
	prev_page?: number;
	results: Banner[];
	results_per_page?: number;
	results_size?: number;
	total_results_size?: number;
}
