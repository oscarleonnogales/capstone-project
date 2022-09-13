import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../models/cart/CartItem';
import { Product } from '../models/products/Product';

import {
	selectCart,
	increaseCartQuantity,
	decreaseCartQuantity,
	removeEntirelyFromCart,
} from '../redux/slices/cartSlice';
import './styles/CartButtons.scss';

export type CartButtonProps = {
	product: Product;
	showRemoveFromCartBtn: boolean;
};

const CartButtons: React.FunctionComponent<CartButtonProps> = ({
	product,
	showRemoveFromCartBtn,
}) => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	const matchingCartItem: CartItem | undefined = useMemo(
		() => cart.find((item) => item.product.id === product.id),
		[cart, product.id]
	);

	const alreadyInCart = (): boolean => {
		return matchingCartItem ? true : false;
	};

	const handleIncreaseCartAmount = (event: React.SyntheticEvent): void => {
		event.stopPropagation();
		dispatch(increaseCartQuantity(product));
	};

	const handleDecreaseCartAmount = (event: React.SyntheticEvent): void => {
		event.stopPropagation();
		dispatch(decreaseCartQuantity(product));
	};

	const handleRemovingFromCart = (event: React.SyntheticEvent): void => {
		event.stopPropagation();
		dispatch(removeEntirelyFromCart(product));
	};

	if (!alreadyInCart()) {
		return (
			<button className="btn add-to-cart-btn" onClick={(event) => handleIncreaseCartAmount(event)}>
				+ Add To Cart
			</button>
		);
	}

	return (
		<div className="cart-btns-container">
			<div className="inc-dec-btns">
				<button
					className="btn cart-btn-decrease"
					onClick={(event) => handleDecreaseCartAmount(event)}
				>
					-
				</button>
				<p className="cart-quantity">{matchingCartItem?.quantity}</p>
				<button
					className="btn cart-btn-increase"
					onClick={(event) => handleIncreaseCartAmount(event)}
				>
					+
				</button>
			</div>
			{showRemoveFromCartBtn && (
				<div className="btn cart-btn-remove" onClick={(event) => handleRemovingFromCart(event)}>
					Remove From Cart
				</div>
			)}
		</div>
	);
};

export default CartButtons;
