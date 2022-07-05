import React from 'react';

import { CartItem } from '../models/cart/CartItem';

import { getCartItemSubtotal, getOrderTotal } from '../utils/services/cartService';
import './styles/OrderSummaryTable.scss';

export interface IOrderSummaryTableProps {
	cartItems: CartItem[];
}

const OrderSummaryTable: React.FunctionComponent<IOrderSummaryTableProps> = ({ cartItems }) => {
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
				<div className="total-price">{`$${getOrderTotal(cartItems)}`}</div>
			</div>
		</div>
	);
};

export default OrderSummaryTable;
