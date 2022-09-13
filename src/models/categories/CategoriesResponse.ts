import { CategoriesApiResponse } from './CategoriesApiResponse';

export type CategoriesResponse = {
	categoriesData: CategoriesApiResponse;
	areCategoriesLoading: boolean;
};
