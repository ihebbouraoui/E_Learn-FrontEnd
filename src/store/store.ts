import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authStore} from "./modules/Auth/AuthModule";
import {directorStore} from "./modules/Director/directorModule";
import {profStore} from "./modules/Prof/profModule";
import {studentStore} from "./modules/Student/studentModule";

const rootReducer = combineReducers({
	auth:authStore.reducer,
	director:directorStore.reducer,
	prof:profStore.reducer,
	student:studentStore.reducer
})

export const store = configureStore({
	reducer: rootReducer

})

export type RootState = ReturnType<typeof rootReducer>;

export const host='http://localhost:3002'