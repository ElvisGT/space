import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Slices/menuSlice";
import favoritesReducer from "../Slices/favoritesSlice";
import notificationReducer from "../Slices/notificationSlice";

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		favorites: favoritesReducer,
		notification: notificationReducer,
	},
});
