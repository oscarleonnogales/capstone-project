import { Dimensions } from './Dimensions';

export interface ImageData {
	url: string;
	alt: string;
	copyright?: string;
	dimensions: Dimensions;
}
