import { ImageData } from './ImageData';

export interface ProductData {
	name: string;
	sku: string;
	mainimage: ImageData;
	stock: number;
	price: number;
}
