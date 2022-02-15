import {ApiCall} from "../../ApiCall";
import {host, store} from "../../store";
import {setLoading} from "../Auth/AuthModule";
import {setListProf, setSelectedProf} from "./profModule";

export const getProf = () => {
	return ApiCall({
		endPoint: host+"/prof",
		method: 'get',
		successFunction: (res: any) => {
			store.dispatch(setListProf(res))
			store.dispatch(setLoading(true))
		},
	})
}
export const deleteProf=(id:any)=>{
	return ApiCall({
		endPoint:host+`/prof/delete/${id}`,
		method:'delete',
	});

}


export const filterProf=(data:any)=>{
	return ApiCall({
		endPoint:"http://localhost:3002/prof/filterProf",
		method:'get',
		data:data,
		successFunction:(res:any)=>{
			store.dispatch(setListProf(res))
			store.dispatch(setLoading(true))
		}
	})
}

export  const detailProf=(data:any)=>{
	return ApiCall({
		endPoint:host+'/prof/detail',
		method:'get',
		data:data,
		successFunction:(res:any)=>{
			store.dispatch(setLoading(true))
		}

	})
}