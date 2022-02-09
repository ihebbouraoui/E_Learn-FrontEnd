import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface studentInterface {
	list_student:Array<any>;
	detail_User:any
}
const initialValues: studentInterface = {
	list_student:[],
	detail_User:undefined
}
export const studentStore = createSlice({
	name: "root",
	initialState: initialValues,
	reducers: {
		setListStudent:(state, action: PayloadAction<any>)=>{
			state.list_student=action.payload
		},
		setUser:(state, action: PayloadAction<any>)=>{
			state.detail_User=action.payload
		},

	},

})
export const {setListStudent,setUser} = studentStore.actions;