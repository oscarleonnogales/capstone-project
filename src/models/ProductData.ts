import { ImageData } from './ImageData';

export interface ProductData {
	name: string;
	sku: string;
	mainimage: ImageData;
	stock: number;
	price: number;
	category: ProductCategory;
}

interface ProductCategory {
	id: string;
	type: string;
	tags: string[];
	slug: string;
	lang: string;
	first_publication_date: string;
	last_publication_date: string;
	link_type: string;
	isBroken: boolean;
}
