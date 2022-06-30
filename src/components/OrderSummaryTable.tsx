import React from 'react';

import { CartItem } from '../models/cart/CartItem';

import './styles/OrderSummaryTable.scss';

export interface IOrderSummaryTableProps {
	cartItems: CartItem[];
}

const OrderSummaryTable: React.FunctionComponent<IOrderSummaryTableProps> = ({ cartItems }) => {
	const getCartItemSubtotal = (cartItem: CartItem): number => {
		return cartItem.quantity * cartItem.product.data.price;
	};

	const getOrderTotal = (): number => {
		// eslint-disable-next-line no-param-reassign
		return cartItems.reduce((total, item) => (total += getCartItemSubtotal(item)), 0);
	};

	return (
		<div className="order-summary-table">
			<div className="table-row">
				<div className="table-label">Quantity</div>
				<div className="table-label">Item Name</div>
				<div className="table-label">Price</div>
				<div className="table-label">Subtotal</div>
			</div>
			{cartItems.map((item) => (
				<div className="table-row" key={item.product.id}>
					<div className="quantity">{item.quantity}</div>
					<div className="item-name">{item.product.data.name}</div>
					<div className="price">{`$${item.product.data.price}`}</div>
					<div className="subtotal">{`$${getCartItemSubtotal(item)}`}</div>
				</div>
			))}
			<div className="table-row total-row">
				<div className="empty-div" />
				<div className="empty-div" />
				<div className="total">Total</div>
				<div className="total-price">{`$${getOrderTotal()}`}</div>
			</div>
		</div>
	);
};

export default OrderSummaryTable;
