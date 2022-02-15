import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface studentInterface {
	list_student:Array<any>;
	selected_user:any
}
const initialValues: studentInterface = {
	list_student:[],
	selected_user:undefined
}
export const studentStore = createSlice({
	name: "root",
	initialState: initialValues,
	reducers: {
		setListStudent:(state, action: PayloadAction<any>)=>{
			state.list_student=action.payload
		},
		setSelectedUser:(state, action: PayloadAction<any>)=>{
			state.selected_user=action.payload
		},

	},

})
export const {setListStudent,setSelectedUser} = studentStore.actions;