import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface authInterfrace {
	isLoading: boolean;


}

const initialValues: authInterfrace = {
	isLoading: false,


}
export const authStore = createSlice({
	name: "auth",
	initialState: initialValues,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},

	}
})
export const {setLoading} = authStore.actions;