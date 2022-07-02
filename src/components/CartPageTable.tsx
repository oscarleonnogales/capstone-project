import React from 'react';
import { useDispatch } from 'react-redux';

import { CartItem } from '../models/cart/CartItem';
import { Product } from '../models/products/Product';

import { removeEntirelyFromCart } from '../redux/slices/cartSlice';
import { getCartItemSubtotal, getOrderTotal } from '../utils/services/cartService';
import CartButtons from './CartButtons';
import './styles/CartPageTable.scss';

export interface ICartTableProps {
	items: CartItem[];
}

const CartTable: React.FunctionComponent<ICartTableProps> = ({ items }) => {
	const dispatch = useDispatch();

	const handleRemoveProductFromCart = (product: Product): void => {
		dispatch(removeEntirelyFromCart(product));
	};

	return (
		<div className="cart-page-table">
			{items.map((item) => (
				<div className="table-row" key={item.product.id}>
					<button
						className="btn remove-from-cart-btn"
						type="button"
						onClick={() => handleRemoveProductFromCart(item.product)}
					>
						&times;
					</button>
					<img
						className="table-image"
						src={item.product.data.mainimage.url}
						alt={item.product.data.name}
					/>
					<div className="table-row-details">
						<div className="table-row-name">{item.product.data.name}</div>
						<div className="table-row-price">{`${item.quantity} x $${item.product.data.price}`}</div>
						<CartButtons product={item.product} showRemoveFromCartBtn={false} />
					</div>
					<div className="table-subtotal">{`$${getCartItemSubtotal(item)}`}</div>
					<hr />
				</div>
			))}
			<div className="order-total">{`Order Total: $${getOrderTotal(items)}`}</div>
		</div>
	);
};

export default CartTable;
