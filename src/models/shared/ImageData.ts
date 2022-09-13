import { Dimensions } from './Dimensions';

export type ImageData = {
	url: string;
	alt: string;
	copyright?: string;
	dimensions: Dimensions;
};
