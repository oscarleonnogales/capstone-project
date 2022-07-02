import { ImageData } from '../shared/ImageData';
import { ImageObject } from '../shared/ImageObject';
import { Specification } from '../shared/Specification';
import { ProductCategory } from './ProductCategory';

export interface ProductData {
	name: string;
	sku: string;
	mainimage: ImageData;
	images: ImageObject[];
	short_description: string;
	description: Object[];
	specs: Specification[];
	stock: number;
	price: number;
	category: ProductCategory;
}
