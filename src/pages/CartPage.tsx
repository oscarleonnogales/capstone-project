import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

import {
	selectCart,
	decreaseCartQuantity,
	increaseCartQuantity,
	removeEntirelyFromCart,
} from '../redux/slices/cartSlice';
import './styles/CartPage.scss';

export interface ICartPageProps {}

const CartPage: React.FunctionComponent<ICartPageProps> = (props) => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	return (
		<>
			<Header />
			<div className="main-container">
				<h1>Cart page</h1>
			</div>
			<Footer />
		</>
	);
};

export default CartPage;
