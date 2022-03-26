import React, {useEffect, useState} from "react";
import TabForm from "../../../../component/Tableau/tableauxForm";
import {classTabConst} from "./classInfoConst";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {getClassByIdProf, getSubjectByIdProfAndClassId} from "../../../../store/modules/Prof/profService";
import {getToDoTest} from "../../../../store/modules/Student/studentService";

const ClasseInfo=()=>{
	const profClass=useSelector((state:RootState)=>state.prof.prof_class)
	const select_Prof=useSelector((state:RootState)=>state.prof.selected_Prof)
	const [tableModel, setTableModel] = useState(classTabConst)
	useEffect(()=>{
		getSubjectByIdProfAndClassId({id_Prof:select_Prof._id}).then((res:any)=>{
		initTable(res)
		})
	},[])

	const initTable=(res?:any)=>{
		let temp = tableModel
		temp.data = res?.map((item?: any) => ({
			class:item?.class?.title,
			title:item?.title,
		}))
		setTableModel({...temp})
	}
	return(
		<div className={'directorMain'}>
                 <TabForm filterData={{...tableModel}}/>

		</div>
	)
}
export default ClasseInfo