import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/MobileMenu.scss';

export interface IMobileMenuProps {
	navItems: string[];
	formatString: (str: string) => string;
}

const MobileMenu: React.FunctionComponent<IMobileMenuProps> = ({ navItems, formatString }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = (): void => {
		setIsOpen((open) => !open);
	};

	const closeMenu = (): void => {
		setIsOpen(false);
	};

	return (
		<>
			<button className="nav-toggle-btn" aria-label="toggle navigation" onClick={toggleMenu}>
				<span className="hamburger" />
			</button>
			{isOpen && (
				<>
					<div className="menu-overlay" onClick={closeMenu} />
					<nav className="mobile-menu">
						<ul className="mobile-menu-items">
							{navItems.map((item) => (
								<li key={item}>
									<Link to={`/${item === 'Home' ? '' : formatString(item)}`}>
										<button className="mobile-nav-btn">{item}</button>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</>
			)}
		</>
	);
};

export default MobileMenu;
