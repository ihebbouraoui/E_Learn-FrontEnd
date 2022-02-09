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
