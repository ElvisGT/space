import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		add_card: (state, action) => {
			state.value = [...state.value, action.payload];
		},
		remove_card: (state, action) => {
			state.value = state.value.filter((item) => item.id !== action.payload.id);
		},
	},
});

export default favoritesSlice.reducer;
export const { add_card, remove_card } = favoritesSlice.actions;
