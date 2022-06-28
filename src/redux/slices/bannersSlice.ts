import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Banner } from '../../models/banners/Banner';

interface BannerState {
	banners: Banner[];
	currentIndex: number;
}

const initialState: BannerState = {
	banners: [],
	currentIndex: 0,
};

export const bannerSlice = createSlice({
	name: 'banners',
	initialState,
	reducers: {
		setBanners: (state, action: PayloadAction<Banner[]>) => {
			state.banners = action.payload;
		},
		setCurrentIndex: (state, action: PayloadAction<number>) => {
			state.currentIndex = action.payload;
		},
		decrementIndex: (state) => {
			state.currentIndex =
				state.currentIndex === 0 ? state.banners.length - 1 : state.currentIndex - 1;
		},
		incrementIndex: (state) => {
			state.currentIndex =
				state.currentIndex > state.banners.length - 2 ? 0 : state.currentIndex + 1;
		},
		resetBanners: (state) => {
			state.banners = initialState.banners;
			state.currentIndex = initialState.currentIndex;
		},
	},
});

export const { setBanners, setCurrentIndex, decrementIndex, incrementIndex, resetBanners } =
	bannerSlice.actions;

export const selectBanners = (state: RootState) => state.banners.banners;
export const selectCurrentIndex = (state: RootState) => state.banners.currentIndex;

export default bannerSlice.reducer;
