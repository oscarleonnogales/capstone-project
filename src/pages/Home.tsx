import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.scss';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	return (
		<>
			<Header />
			<Footer />
		</>
	);
};

export default Home;
