import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface directorInterface {
	list_director:Array<any>;
	selected_director?:any


}
const initialValues: directorInterface = {
	list_director:[],
	selected_director:undefined
}
export const directorStore = createSlice({
	name: "root",
	initialState: initialValues,
	reducers: {
		setListDirector:(state, action: PayloadAction<any>)=>{
			state.list_director=action.payload
		},
		setSelectedDirector:(state, action: PayloadAction<any>)=>{
			state.selected_director=action.payload
		},


	},

})
export const {setListDirector,setSelectedDirector} = directorStore.actions;