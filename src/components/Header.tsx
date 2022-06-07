import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header: React.FunctionComponent = () => {
	const navItems: string[] = ['Home', 'About Us', 'Products', 'Order History'];

	return (
		<nav className="navbar">
			<ul className="navbar-list navbar-links-container">
				<div className="searchContainer">
					<input className="searchInput" type="text" name="searchTerm" placeholder="Search" />
				</div>
				{navItems.map((item) => (
					<li key={item}>
						{/* TODO: Change the HREF */}
						<Link to={`/`}>
							<button className="btn navbar-button">{item}</button>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
