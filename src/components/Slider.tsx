import React from 'react';
import { Banner } from '../models/Banner';
import './styles/Slider.scss';

export interface ISliderProps {
	// FIXME: Prevent eslint error without the question mark and how to only execute once
	// Same issue in ProductsGrid component
	banners?: Banner[];
}

const Slider: React.FunctionComponent<ISliderProps> = ({ banners }) => {
	console.log(banners);
	return <div className="slider">Slider placeholder</div>;
};

export default Slider;
