import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CheckoutFormValues } from '../models/shared/CheckoutFormValues';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummaryTable from '../components/OrderSummaryTable';

import { selectCart, resetCart } from '../redux/slices/cartSlice';
import './styles/CheckoutPage.scss';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

export interface ICheckoutPageProps {}

const CheckoutPage: React.FunctionComponent<ICheckoutPageProps> = (props) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCart);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { width } = useWindowDimensions();
	let isMobile: boolean = useMemo(() => (width <= 689 ? true : false), [width]);

	const initialFormValues: CheckoutFormValues = { name: '', email: '', zipCode: 0, notes: '' };

	const handlePlaceOrder = (values: CheckoutFormValues): void => {
		setIsModalOpen(true);
		dispatch(resetCart());
	};

	return (
		<>
			<Header />
			<div className="main-container">
				<h1 className="page-title">Checkout</h1>

				{cartItems.length === 0 && !isModalOpen && (
					<p className="page-message">
						There are no items in your cart, please continue shopping before proceeding to the
						checkout.
					</p>
				)}
				{cartItems.length !== 0 && (
					<>
						{!isMobile && <h2 className="order-summary">Order Summary</h2>}
						{!isMobile && <OrderSummaryTable cartItems={cartItems} />}
						<CheckoutForm
							initialFormValues={initialFormValues}
							handlePlaceOrder={handlePlaceOrder}
						/>
					</>
				)}
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
