import { Product } from '../products/Product';

export type CartItem = {
	product: Product;
	quantity: number;
	limitReached: boolean;
};
