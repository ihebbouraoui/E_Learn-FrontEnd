import React, {useEffect, useState} from "react";
import FilterForm from "../../../component/Filter/filterForm";
import {RessourceFormConst, ressourceTab} from "./RessourceConst";
import TabForm, {btnInetrface} from "../../../component/Tableau/tableauxForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {deleteChapter, deleteResource, getChapter, getResource} from "../../../store/modules/Setting/settingService";
import {chapterTab} from "../Chapter/ChapterConsst";


const Ressources = () => {
	const deleteRes = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				console.log('DETAIL')
				console.log(chapterTab.data[data.index])
				break;
			case 'delete':
				deleteResource(list_Resource[data.index]._id).then((res:any)=>{
					getResource().then((res:any)=>{
						initTable(res)
					})
				})
				break;
		}
	}
	const list_Resource=useSelector((state:RootState)=>state.setting.list_Resource)
	const [tableModel, setTableModel] = useState(ressourceTab)

	useEffect(()=>{
		getResource().then((res:any)=>{
			initTable(res)
		})

	},[])
	useEffect(()=>{
		initTable(list_Resource)
	},[list_Resource])

	const initTable=(res:any)=>{
		let temp = tableModel
		temp.data = res?.map((item:any) => ({
			title:item.title,
		}))
		setTableModel({...temp})
	}
	return (
		<div className={'directorMain'}>
			<FilterForm filterData={RessourceFormConst}/>
			<TabForm filterData={{...tableModel, sendEventToParent: deleteRes}}/>
		</div>
	)

}
export default Ressources