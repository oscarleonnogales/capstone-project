import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingsPage from './pages/ProductListingsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import InvalidPage from './pages/InvalidPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="/products" element={<ProductListingsPage />} />
				<Route path="/product-details" element={<ProductDetailsPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="*" element={<InvalidPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
