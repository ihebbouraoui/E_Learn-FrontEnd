import {ApiCall} from "../../ApiCall";
import {host, store} from "../../store";
import {setLoading} from "../Auth/AuthModule";
import {setListStudent, setUser} from "./studentModule";
import {setListDirector} from "../Director/directorModule";

export const getStudent = () => {
	return ApiCall({
		endPoint: host+"/student",
		method: 'get',
		successFunction: (res: any) => {
			store.dispatch(setListStudent(res))
			store.dispatch(setLoading(true))
		},
	})
}
export const deleteStudent=(id:any)=>{
	return ApiCall({
		endPoint:host+`/student/delete/${id}`,
		method:'delete',
	});
}

export const getStudentById=(id:any)=>{
	return ApiCall({
		endPoint:host+`/student/detail/${id}`,
		method:'get',
		successFunction:(res:any)=>{
			store.dispatch(setUser(res))
			store.dispatch(setLoading(true))
		}
	})
}

export const filterStudent=(data:any)=>{
	return ApiCall({
		endPoint:"http://localhost:3002/student/filterStudent",
		method:'get',
		data:data,
		successFunction:(res:any)=>{
			store.dispatch(setListStudent(res))
			store.dispatch(setLoading(true))
		}
	})

}
