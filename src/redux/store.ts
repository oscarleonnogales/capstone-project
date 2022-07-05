import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import productsReducer from './slices/productSlice';
import bannersReducer from './slices/bannersSlice';
import categoriesReducer from './slices/categoriesSlice';
import filtersReducer from './slices/filtersSlice';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';

const reducers = combineReducers({
	products: productsReducer,
	banners: bannersReducer,
	categories: categoriesReducer,
	filters: filtersReducer,
	cart: cartReducer,
	user: userReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
