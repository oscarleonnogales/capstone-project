import { CategoriesApiResponse } from './CategoriesApiResponse';

export interface CategoriesResponse {
	categoriesData: CategoriesApiResponse;
	areCategoriesLoading: boolean;
}
