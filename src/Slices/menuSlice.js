import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		active: (state) => {
			state.value = !state.value;
		},
	},
});

export default menuSlice.reducer;
export const { active } = menuSlice.actions;
