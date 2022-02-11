import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface authInterfrace {
	isLoading: boolean;
	isLogged:boolean;


}

const initialValues: authInterfrace = {
	isLoading: false,
	isLogged:true



}
export const authStore = createSlice({
	name: "auth",
	initialState: initialValues,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		setLogged: (state, action: PayloadAction<boolean>) => {
			state.isLogged = action.payload
		},

	}
})
export const {setLoading,setLogged} = authStore.actions;