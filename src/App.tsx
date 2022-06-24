import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingsPage from './pages/ProductListingsPage';
import AboutUsPage from './pages/AboutUsPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductListingsPage />} />
				<Route path="/product-details" element={<ProductDetailsPage />} />
				<Route path="/aboutus" element={<AboutUsPage />} />
				<Route path="/orderhistory" element={<OrderHistoryPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
