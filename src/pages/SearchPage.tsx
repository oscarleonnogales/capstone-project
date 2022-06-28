import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/SearchPage.scss';

export interface ISearchPageProps {}

const SearchPage: React.FunctionComponent<ISearchPageProps> = (props) => {
	return (
		<>
			<Header />
			<div className="main-container">
				<h1>search page</h1>
			</div>
			<Footer />
		</>
	);
};

export default SearchPage;
