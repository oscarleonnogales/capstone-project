import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

/*
    Currently, this slice is only being used to store the 'isMobile' value. I decided to include it in the redux store in case I decide to add user authentication in the future.
*/

interface UserState {
	isMobile: boolean;
}

const initialState: UserState = {
	isMobile: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload;
		},
		resetUserState: (state) => {
			state.isMobile = initialState.isMobile;
		},
	},
});

export const { setIsMobile, resetUserState } = userSlice.actions;

export const selectIsMobile = (state: RootState) => state.user.isMobile;

export default userSlice.reducer;
