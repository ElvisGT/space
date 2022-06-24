import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		add_favorite: (state, action) => {
			state.value = [...state.value, action.payload];
		},
	},
});

export default favoritesSlice.reducer;
export const { add_favorite } = favoritesSlice.actions;
