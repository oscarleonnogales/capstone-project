import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu';

import logo from '../images/convenient.png';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
import './styles/Header.scss';

const Header: React.FunctionComponent = () => {
	const navItems: string[] = ['Home', 'Products', 'Cart', 'Checkout'];
	const { width } = useWindowDimensions();

	let isMobile: boolean = useMemo(() => (width <= 689 ? true : false), [width]);

	const formatString = (str: string): string => {
		return str.split(' ').join('').toLowerCase();
	};

	if (isMobile) {
		return <MobileMenu navItems={[...navItems, 'Search']} formatString={formatString} />;
	}

	return (
		<nav className="navbar">
			<Link to="/">
				<img src={logo} className="logo-image" alt="logo" />
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
