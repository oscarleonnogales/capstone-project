import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CartPageTable from '../components/CartPageTable';

import { selectCart } from '../redux/slices/cartSlice';
import './styles/CartPage.scss';

const CartPage: React.FunctionComponent = () => {
	const cartItems = useSelector(selectCart);

	if (cartItems.length === 0) {
		return (
			<>
				<Header />
				<div className="main-container">
					<h1 className="page-title">Cart page</h1>
					<p className="no-items-message">No items in your cart.</p>
					<Link to="/products" className="btn continue-btn">
						Continue Shopping?
					</Link>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<div className="main-container">
				<h1 className="page-title">Cart page</h1>
				<CartPageTable items={cartItems} />
				<Link to="/checkout" className="btn checkout-btn">
					Proceed to Checkout
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default CartPage;
