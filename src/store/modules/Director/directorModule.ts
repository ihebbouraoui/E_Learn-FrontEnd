import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface directorInterface {
	list_director:Array<any>;


}
const initialValues: directorInterface = {
	list_director:[],
}
export const directorStore = createSlice({
	name: "root",
	initialState: initialValues,
	reducers: {
		setListDirector:(state, action: PayloadAction<any>)=>{
			state.list_director=action.payload
		},

	},

})
export const {setListDirector} = directorStore.actions;