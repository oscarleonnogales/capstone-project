import { Product } from '../products/Product';

export interface CartItem {
	product: Product;
	quantity: number;
}
