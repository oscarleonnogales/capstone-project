import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as ContentService from '../services/contentService';
import { Product } from '../models/Product';

export interface IProductListingsProps {}

const ProductListings: React.FunctionComponent<IProductListingsProps> = (props) => {
	return (
		<>
			<Header />
			<div className="product-listings">hello from products</div>
			<Footer />
		</>
	);
};

export default ProductListings;
