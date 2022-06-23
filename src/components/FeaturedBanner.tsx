import React, { useState, useEffect } from 'react';
import { Banner } from '../models/banners/Banner';
import { Link } from 'react-router-dom';
import './styles/FeaturedBanner.scss';

export interface IFeaturedBannerProps {
	banners: Banner[];
}

const FeaturedBanner: React.FunctionComponent<IFeaturedBannerProps> = ({ banners }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const interval: NodeJS.Timer = setInterval(() => {
			nextImage();
		}, 3500);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const prevImage = (): void => {
		setCurrentIndex((currentIndex) => (currentIndex === 0 ? banners.length - 1 : currentIndex - 1));
	};

	const nextImage = (): void => {
		setCurrentIndex((currentIndex) => (currentIndex > banners.length - 2 ? 0 : currentIndex + 1));
	};

	return (
		<div className="slider">
			<button className="slider-btn previous-btn" onClick={prevImage}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					className="bi bi-arrow-left-circle"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
					/>
				</svg>
			</button>
			<button className="slider-btn next-btn" onClick={nextImage}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="bi bi-arrow-right-circle"
					fill="white"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
					/>
				</svg>
			</button>
			<Link to={`/products?filterBy=yxDS`}>
				<img
					className="slider-image"
					src={banners[currentIndex]?.data.main_image.url}
					alt={banners[currentIndex]?.data.main_image.alt}
				/>
			</Link>
		</div>
	);
};

export default FeaturedBanner;
