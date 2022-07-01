import { ImageData } from '../shared/ImageData';
import { ProductCategory } from './ProductCategory';

export interface ProductData {
	name: string;
	sku: string;
	mainimage: ImageData;
	images: ImageData[];
	short_description: string;
	description: Object[];
	specs: Object[];
	stock: number;
	price: number;
	category: ProductCategory;
}
