import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Slices/menuSlice";
import favoritesReducer from "../Slices/favoritesSlice";

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		favorites: favoritesReducer,
	},
});
