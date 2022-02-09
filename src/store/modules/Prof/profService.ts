import {ApiCall} from "../../ApiCall";
import {host, store} from "../../store";
import {setLoading} from "../Auth/AuthModule";
import {setListProf} from "./profModule";

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
