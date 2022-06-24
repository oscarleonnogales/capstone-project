import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface IOrderHistoryPageProps {}

const OrderHistoryPage: React.FunctionComponent<IOrderHistoryPageProps> = (props) => {
	return (
		<>
			<Header />
			<h1>order history</h1>
			<Footer />
		</>
	);
};

export default OrderHistoryPage;
