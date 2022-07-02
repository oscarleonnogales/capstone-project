import { CartItem } from '../../models/cart/CartItem';

export const getCartItemSubtotal = (cartItem: CartItem): number => {
	return cartItem.quantity * cartItem.product.data.price;
};

export const getOrderTotal = (cartItems: CartItem[]): number => {
	// eslint-disable-next-line no-param-reassign
	return cartItems.reduce((total, item) => (total += getCartItemSubtotal(item)), 0);
};
