export const API_BASE_URL: string = 'https://wizeline-academy.cdn.prismic.io/api/v2';

export const FEATURED_BANNERS_URL = `&q=${encodeURIComponent(
	'[[at(document.type, "banner")]]'
)}&lang=en-us&pageSize=5`;

export const FEATURED_PRODUCTS_URL =
	'&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16';

export const CATEGORIES_URL =
	'&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30';

export const CATEGORIES = 'categories';

export const defaultPageSize: number = 12;
