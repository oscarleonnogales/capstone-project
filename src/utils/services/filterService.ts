import { FilterHash } from '../../models/shared/FilterHash';

export const getOriginalFilters = (
	categorySlugs: string[],
	urlCategorySlug: string | null
): FilterHash => {
	const newFilters: FilterHash = {};
	categorySlugs.forEach((slug) => {
		if (slug === urlCategorySlug) {
			newFilters[slug] = true;
		} else {
			newFilters[slug] = false;
		}
	});
	return newFilters;
};
