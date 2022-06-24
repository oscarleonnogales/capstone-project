import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListings from './pages/ProductListings';
import AboutUs from './pages/AboutUs';
import OrderHistory from './pages/OrderHistory';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<ProductListings />} />
				{/* @ts-ignore */}
				<Route path="/product-details" element={<ProductDetailsPage />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/orderhistory" element={<OrderHistory />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
