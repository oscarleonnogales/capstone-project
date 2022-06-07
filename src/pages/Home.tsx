import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import ProductsGrid from '../components/ProductsGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import './styles/Home.scss';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	return (
		<>
			<Header />
			<Slider />
			<ProductsGrid />
			<FeaturedProducts />
			<Footer />
		</>
	);
};

export default Home;
