import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface profInterface {
	list_Prof:Array<any>;
	selected_Prof:any
}
const initialValues: profInterface = {
	selected_Prof:undefined,
	list_Prof:[],
}
export const profStore = createSlice({
	name: "root",
	initialState: initialValues,
	reducers: {
		setListProf:(state, action: PayloadAction<any>)=>{
			state.list_Prof=action.payload
		},
		setSelectedProf:(state,action:PayloadAction<any>)=>{
			state.selected_Prof=action.payload
		}

	},

})
export const {setListProf,setSelectedProf} = profStore.actions;