import React, {useEffect, useState} from "react";
import FilterForm from "../../../component/Filter/filterForm";

import {chapterTab, SeasonFormConst} from "./ChapterConsst";
import TabForm, {btnInetrface} from "../../../component/Tableau/tableauxForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {AbonnementTab} from "../../Abonnement/abonnementConts";
import {getAbonnements} from "../../../store/modules/Abonnement/abonnementService";
import {deleteChapter, getChapter} from "../../../store/modules/Setting/settingService";
import {DirectorTab} from "../../Director/directorConsts";
import {deleteDirector, GetDirector} from "../../../store/modules/Director/directorService";

const Chapters = () => {

	const deleteChap = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				console.log('DETAIL')
				console.log(chapterTab.data[data.index])
				break;
			case 'delete':
				deleteChapter(list_Chapter[data.index]._id).then((res:any)=>{
					getChapter().then((res:any)=>{
						initTable(res)
					})
				})
				break;
		}
	}


	const list_Chapter=useSelector((state:RootState)=>state.setting.list_Chapter)
	const [tableModel, setTableModel] = useState(chapterTab)

	useEffect(()=>{
		getChapter().then((res:any)=>{
			initTable(res)
		})

	},[])
	useEffect(()=>{
		initTable(list_Chapter)
	},[list_Chapter])

	const initTable=(res:any)=>{
		let temp = tableModel
		temp.data = res?.map((item:any) => ({
			title:item.title,
		}))
		setTableModel({...temp})
	}
	return (
		<div className={'qsd'}>
			<FilterForm filterData={SeasonFormConst}/>
			<TabForm filterData={{...tableModel, sendEventToParent: deleteChap}}/>
		</div>
	)

}
export default Chapters