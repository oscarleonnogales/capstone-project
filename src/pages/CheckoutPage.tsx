import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCart,
	decreaseCartQuantity,
	increaseCartQuantity,
	removeEntirelyFromCart,
	resetCart,
} from '../redux/slices/cartSlice';
import './styles/CheckoutPage.scss';

export interface ICheckoutPageProps {}

const CheckoutPage: React.FunctionComponent<ICheckoutPageProps> = (props) => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	return (
		<>
			<Header />
			<div className="main-container">
				<h1>Checkout Page</h1>
				{cart.map((item) => (
					<div className="cart-item" key={item.product.id}>
						{item.product.data.name}
						{`${item.quantity} in cart`}
					</div>
				))}
			</div>
			<Footer />
		</>
	);
};

export default CheckoutPage;
