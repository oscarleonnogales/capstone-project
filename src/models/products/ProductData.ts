import { ImageData } from '../shared/ImageData';
import { ProductCategory } from './ProductCategory';

export interface ProductData {
	name: string;
	sku: string;
	mainimage: ImageData;
	stock: number;
	price: number;
	category: ProductCategory;
}