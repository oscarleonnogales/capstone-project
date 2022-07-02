import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoadingAnimation from './components/LoadingAnimation';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
const ProductListingsPage = React.lazy(() => import('./pages/ProductListingsPage'));
const ProductDetailsPage = React.lazy(() => import('./pages/ProductDetailsPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const InvalidPage = React.lazy(() => import('./pages/InvalidPage'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<HomePage />
						</React.Suspense>
					}
				/>
				<Route
					path="/home"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<HomePage />
						</React.Suspense>
					}
				/>
				<Route
					path="/cart"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<CartPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/checkout"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<CheckoutPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/products"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<ProductListingsPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/product/:id"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<ProductDetailsPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/search"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<SearchPage />
						</React.Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<React.Suspense fallback={<LoadingAnimation />}>
							<InvalidPage />
						</React.Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
