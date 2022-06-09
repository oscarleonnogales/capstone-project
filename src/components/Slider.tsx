import React, { useState } from 'react';
import { Banner } from '../models/Banner';
import './styles/Slider.scss';

export interface ISliderProps {
	banners: Banner[];
}

const Slider: React.FunctionComponent<ISliderProps> = ({ banners }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const prevImage = (): void => {
		setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
	};

	const nextImage = (): void => {
		setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
	};

	return (
		<div className="slider">
			<button className="slider-btn previous-btn" onClick={prevImage}>
				{'<'}
			</button>
			<button className="slider-btn next-btn" onClick={nextImage}>
				{'>'}
			</button>
			<div className="slider-image-container" key={banners[currentIndex]?.data.main_image.alt}>
				<img
					src={banners[currentIndex]?.data.main_image.url}
					alt={banners[currentIndex]?.data.main_image.alt}
					className="slider-image"
				/>
			</div>
		</div>
	);
};

export default Slider;
