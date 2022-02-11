import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface profInterface {
	list_Prof:Array<any>;
}
const initialValues: profInterface = {
	list_Prof:[],
}
export const profStore = createSlice({
	name: "root",
	initialState: initialValues,
	reducers: {
		setListProf:(state, action: PayloadAction<any>)=>{
			state.list_Prof=action.payload
		},

	},

})
export const {setListProf} = profStore.actions;