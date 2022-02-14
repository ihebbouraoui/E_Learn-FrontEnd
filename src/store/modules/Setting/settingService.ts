import {ApiCall} from "../../ApiCall";
import {host, store} from "../../store";
import {setLoading} from "../Auth/AuthModule";
import {setListChapter, setListResource} from "./settingModule";

// api Chapter
export const getChapter = () => {
	return ApiCall({
		endPoint: host+"/prof/getChapter",
		method: 'get',
		successFunction: (res: any) => {
			store.dispatch(setListChapter(res))
			store.dispatch(setLoading(true))
		},
	})
}
export const deleteChapter=(id:any)=>{
	return ApiCall({
		endPoint:host+`/prof/chapter/delete/${id}`,
		method:'delete',
	});
}


// api Resource
export const getResource = () => {
	return ApiCall({
		endPoint: host+"/prof/getResource",
		method: 'get',
		successFunction: (res: any) => {
			store.dispatch(setListResource(res))
			store.dispatch(setLoading(true))
		},
	})
}
export const deleteResource=(id:any)=>{
	return ApiCall({
		endPoint:host+`/prof/resource/delete/${id}`,
		method:'delete',
	});
}


