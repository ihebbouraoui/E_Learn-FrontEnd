import {ApiCall} from "../../ApiCall";
import {host, store} from "../../store";
import {setListDirector} from "./directorModule";
import {setLoading} from "../Auth/AuthModule";

export const GetDirector = () => {
	return ApiCall({
		endPoint: host+"/director",
		method: 'get',
		successFunction: (res: any) => {
			store.dispatch(setListDirector(res))
			store.dispatch(setLoading(true))
		},
	})
}

export const filterDirector=(data:any)=>{
	return ApiCall({
		endPoint:"http://localhost:3002/director/filterDirector",
		method:'get',
		data:data,
		successFunction:(res:any)=>{
			store.dispatch(setListDirector(res))
			store.dispatch(setLoading(true))
		}
	})
}

export const deleteDirector=(id:any)=>{
	return ApiCall({
		endPoint:host+`/director/delete/${id}`,
		method:'delete',
	});
}

export const updateDirectorWithMail=(data:any)=>{
	return ApiCall({
		endPoint:"http://localhost:3002/director/updateDirector/",
		method:'put',
		data:data,
		successFunction:(res:any)=>{
			store.dispatch(setLoading(true))
		}
	})
}