import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListings from './pages/ProductListings';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<ProductListings />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
