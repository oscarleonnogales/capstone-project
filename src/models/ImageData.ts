export interface ImageData {
	url: string;
	alt: string;
	copyright?: string;
	dimensions: Dimensions;
}

//FIXME: Same file?
interface Dimensions {
	width: number;
	height: number;
}
