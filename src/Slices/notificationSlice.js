import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		setTrueNotification: (state) => {
			state.value = true;
		},
		setFalseNotification: (state) => {
			state.value = false;
		},
	},
});

export default notificationSlice.reducer;
export const { setTrueNotification, setFalseNotification } = notificationSlice.actions;
