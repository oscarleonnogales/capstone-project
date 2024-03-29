import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './styles/InvalidPage.scss';

const InvalidPage: React.FunctionComponent = () => {
	return (
		<>
			<Header />
			<div className="main-container invalid-page">
				<h1 className="invalid-page-title">404</h1>
				<p className="invalid-page-main-paragraph">Sorry, that page does not exist</p>
				<Link to="/" className="btn return-home-btn">
					Return Home?
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default InvalidPage;
