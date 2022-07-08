import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('footer tests', () => {
	it('should render', () => {
		render(<Footer />);
		const footer = screen.getByText("Ecommerce created during Wizeline's Academy React Bootcamp");
		expect(footer).toBeInTheDocument();
	});
});
