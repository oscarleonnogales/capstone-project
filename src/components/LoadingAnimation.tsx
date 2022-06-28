import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './styles/LoadingAnimation.scss';

// Styles and animation taken from https://loading.io/css

const LoadingAnimation: React.FunctionComponent = (props) => {
	return (
		<>
			<Header />
			<div className="lds-grid">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
			<Footer />
		</>
	);
};

export default LoadingAnimation;
