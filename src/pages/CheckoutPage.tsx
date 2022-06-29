import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, resetCart } from '../redux/slices/cartSlice';
import './styles/CheckoutPage.scss';
import { CheckoutFormValues } from '../models/shared/CheckoutFormValues';
import CheckoutForm from '../components/CheckoutForm';
import { Link } from 'react-router-dom';
import { CartItem } from '../models/cart/CartItem';
import OrderSummaryTable from '../components/OrderSummaryTable';

export interface ICheckoutPageProps {}

const CheckoutPage: React.FunctionComponent<ICheckoutPageProps> = (props) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCart);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const initialFormValues: CheckoutFormValues = { name: '', email: '', zipCode: 0, notes: '' };

	const handlePlaceOrder = (values: CheckoutFormValues): void => {
		setIsModalOpen(true);
		dispatch(resetCart());
	};

	if (cartItems.length === 0 && !isModalOpen) {
		return (
			<>
				<Header />
				<div className="main-container">
					<h1 className="page-title">Checkout</h1>
					<p className="no-items-message">
						There are not items in your cart, please continue shopping before proceeding to the
						checkout.
					</p>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<div className="main-container">
				<h1 className="page-title">Checkout</h1>

				<h2 className="order-summary">Order Summary</h2>
				<OrderSummaryTable cartItems={cartItems} />
				<CheckoutForm initialFormValues={initialFormValues} handlePlaceOrder={handlePlaceOrder} />
			</div>
			<Footer />
			{isModalOpen && (
				<div className="modal">
					<div className="modal-content">
						<h2 className="modal-title">Order Received!</h2>
						<Link to="/" className="btn btn-return-home">
							Return Home
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default CheckoutPage;
