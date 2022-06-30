import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/convenient.png';

import './styles/Header.scss';

const Header: React.FunctionComponent = () => {
	const navItems: string[] = ['Home', 'Products', 'Cart', 'Checkout'];

	const formatString = (str: string): string => {
		return str.split(' ').join('').toLowerCase();
	};

	return (
		<nav className="navbar">
			<Link to="/">
				<img src={logo} className="logo" alt="logo-image" />
			</Link>
			<div className="searchContainer">
				<input className="searchInput" type="text" name="searchTerm" placeholder="Search" />
			</div>
			<ul className="navbar-list navbar-links-container">
				{navItems.map((item) => (
					<li key={item}>
						<Link to={`/${item === 'Home' ? '' : formatString(item)}`}>
							<button className="btn navbar-button">{item}</button>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
