import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface IAboutUsPageProps {}

const AboutUsPage: React.FunctionComponent<IAboutUsPageProps> = (props) => {
	return (
		<>
			<Header />
			<h1>about us</h1>
			<Footer />
		</>
	);
};

export default AboutUsPage;
