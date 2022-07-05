import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingAnimation from '../components/LoadingAnimation';
import ImageSlider from '../components/ImageSlider';

import { Product } from '../models/products/Product';
import { ImageData } from '../models/shared/ImageData';

import { selectSelectedProductId } from '../redux/slices/productSlice';
import { useProductDetails } from '../utils/hooks/useProductDetails';
import './styles/ProductDetailsPage.scss';
import CartButtons from '../components/CartButtons';

const ProductDetailsPage: React.FunctionComponent = () => {
	const selectedProductId = useSelector(selectSelectedProductId);
	const { productDetailsData, areProductDetailsLoading } = useProductDetails(selectedProductId);
	const [product, setProduct] = useState<Product>();
	const [imageIndex, setImageIndex] = useState<number>(0);
	const [images, setImages] = useState<ImageData[]>([]);

	const formatCategory = (word: string): string => {
		return word.charAt(0).toUpperCase() + word.slice(1).split('--').join(' & ');
	};

	const incrementIndex = (): void => {
		if (product) {
			setImageIndex((imageIndex) => (imageIndex > images.length - 2 ? 0 : imageIndex + 1));
		}
	};

	const decrementIndex = (): void => {
		if (product) {
			setImageIndex((imageIndex) => (imageIndex === 0 ? images.length - 1 : imageIndex - 1));
		}
	};

	useEffect(() => {
		if (!areProductDetailsLoading) {
			const product = productDetailsData.results[0];
			const images: ImageData[] = product.data.images.map((imageObject) => imageObject.image);
			setProduct(product);
			setImages([...images]);
		}
	}, [areProductDetailsLoading, productDetailsData.results]);

	if (areProductDetailsLoading || !product) {
		return <LoadingAnimation />;
	}

	return (
		<>
			<Header />
			<div className="main-container product-details-page-container">
				<h1 className="page-title">{product.data.name}</h1>
				<div className="d-flex">
					<div className="product-image-container">
						<ImageSlider
							displayedImage={images[imageIndex]}
							handleNextClick={incrementIndex}
							handlePreviousClick={decrementIndex}
						/>
					</div>

					<div className="product-text-container">
						<div className="short-description">{product.data.short_description}</div>
						<div className="product-details">
							<p className="details-header">Product Details</p>
							<div className="detail">
								<p className="sku-detail">SKU: {product.data.sku}</p>
							</div>
							<div className="detail">
								<p className="category-detail">
									Item Category: {formatCategory(product.data.category.slug)}
								</p>
							</div>
							<div className="detail">
								<p className="price-detail">${product.data.price}</p>
							</div>
						</div>
						<div className="cart-btns-container">
							<CartButtons product={product} showRemoveFromCartBtn={true} />
						</div>

						<div className="specs-container">
							<p className="specs-header">Specifications</p>
							<ul className="specs">
								{product.data.specs.map((spec) => (
									<li className="spec" key={spec.spec_name}>
										<p className="spec-name">{`${spec.spec_name}: `}</p>
										<p className="spec-value">{spec.spec_value}</p>
									</li>
								))}
							</ul>
						</div>

						<div className="tags-container">
							<p className="tags-header">Tags</p>
							<ul className="tags">
								{product.tags.map((tag) => (
									<li className="tag" key={tag}>
										{tag}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProductDetailsPage;
