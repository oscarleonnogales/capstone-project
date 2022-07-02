import React from 'react';

import { ImageData } from '../models/shared/ImageData';

import './styles/ImageSlider.scss';

export interface IImageSliderProps {
	displayedImage: ImageData;
	handleNextClick: () => void;
	handlePreviousClick: () => void;
}

const ImageSlider: React.FunctionComponent<IImageSliderProps> = ({
	displayedImage,
	handleNextClick,
	handlePreviousClick,
}) => {
	return (
		<div className="slider">
			<button className="slider-btn previous-btn" onClick={handlePreviousClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#27c5ec"
					className="bi bi-arrow-left-circle"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
					/>
				</svg>
			</button>
			<button className="slider-btn next-btn" onClick={handleNextClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="bi bi-arrow-right-circle"
					fill="#27c5ec"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
					/>
				</svg>
			</button>
			<img className="slider-image" src={displayedImage.url} alt={displayedImage.alt} />
		</div>
	);
};

export default ImageSlider;
