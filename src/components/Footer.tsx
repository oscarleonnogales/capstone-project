import React from 'react';

import './styles/Footer.scss';

const Footer: React.FunctionComponent = () => {
	return (
		<div className="footer">
			<div>
				<a
					href="https://academy.wizeline.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-link"
				>
					Ecommerce created during Wizeline's Academy React Bootcamp
				</a>
			</div>
			<div>
				<a
					className="footer-link secondary-text"
					href="https://www.flaticon.com/free-icons/couch"
					title="couch icons"
				>
					Couch icons created by Freepik - Flaticon
				</a>
			</div>
		</div>
	);
};

export default Footer;
