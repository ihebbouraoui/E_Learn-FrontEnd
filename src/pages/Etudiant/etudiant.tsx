import React, {useEffect, useState} from "react";
import FilterForm from "../../component/Filter/filterForm";
import {EtudiantFormConsts, EtudiantTab} from "./etudiantConsts";
import TabForm, {btnInetrface} from "../../component/Tableau/tableauxForm";
import {DirectorTab} from "../Director/directorConsts";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {deleteProf, getProf} from "../../store/modules/Prof/profService";
import {deleteStudent, filterStudent, getStudent} from "../../store/modules/Student/studentService";
import DetailEtudiant from "./DetailEtudiant/detailEtudiant";


const Etudiant = () => {
	const navigate = useNavigate()
	const receive = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				navigate(`etudiant/student/detail/${listStudent[data.index]._id}`)
				console.log(DirectorTab.data[data.index])
				break;
			case 'delete':
				deleteStudent(listStudent[data.index]._id).then((res) => {
					getStudent().then((res: any) => {
						initTable(res)
					})
				})
				break;
		}
	}
	const [tableModel, setTableModel] = useState(EtudiantTab)
	const listStudent = useSelector((state: RootState) => state.student.list_student)

	//get all student
	useEffect(() => {
		getStudent().then((res: any) => {
			initTable(res)
		})
	}, [])

	// get Filtered Student
	useEffect(()=>{
		initTable(listStudent)
	},[listStudent])

//set student in table
 const initTable=(res:any)=>{
	 let temp = tableModel
	 temp.data = res?.map((item: any) => ({
		 name_student: item.name_student,
		 mail_student: item.mail_student,
		 tel_student: item.tel_student,
	 }))
	 setTableModel({...temp})
 }


	return (
		<div className={'directorMain'}>
			<FilterForm filterData={EtudiantFormConsts}/>
			<TabForm filterData={{...tableModel, sendEventToParent: receive}}/>
		</div>
	)
}
export default Etudiant