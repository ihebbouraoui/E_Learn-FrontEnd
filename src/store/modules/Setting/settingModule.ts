import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface settingInterface {
	list_Chapter:Array<any>
	list_Resource:Array<any>


}

const initialValues: settingInterface = {
	list_Chapter:[],
	list_Resource:[]

}
export const settingStore = createSlice({
	name: "auth",
	initialState: initialValues,
	reducers: {
		setListChapter: (state, action: PayloadAction<any>) => {
			state.list_Chapter=action.payload
		},
		setListResource: (state, action: PayloadAction<any>) => {
			state.list_Resource=action.payload
		},

	}
})
export const {setListChapter,setListResource} = settingStore.actions;