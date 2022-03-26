import React, {useEffect, useState} from "react";
import FilterForm from "../../component/Filter/filterForm";
import {EtudiantFormConsts, EtudiantTab} from "./etudiantConsts";
import TabForm, {btnInetrface} from "../../component/Tableau/tableauxForm";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, store} from "../../store/store";
import {deleteStudent,
	getStudent} from "../../store/modules/Student/studentService";
import {setSelectedUser} from "../../store/modules/Student/studentModule";


const Etudiant = () => {
	const navigate = useNavigate()
	const receive = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				store.dispatch(setSelectedUser(listStudent[data.index]))
				navigate('/etudiant/detail/:id')
				// console.log(listStudent[data.index])
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
	},[])

	// get Filtered Student
	useEffect(()=>{
		initTable(listStudent)
	},[listStudent])

//set student in table
 const initTable=(res:any)=>{
	 let temp = tableModel
	 temp.data = res?.map((item: any) => ({
		 name: item.name,
		 mail: item.mail,
		 tel: item.tel,
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