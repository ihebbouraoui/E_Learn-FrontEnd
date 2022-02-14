import React, {useEffect, useState} from "react";
import FilterForm from "../../component/Filter/filterForm";
import {ProfFilterForm, profTab} from "./profConsts";
import TabForm, {btnInetrface} from "../../component/Tableau/tableauxForm";
import {deleteProf, getProf} from "../../store/modules/Prof/profService";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export interface detailProf {
	nom: string,
	email: string,
	phone: string
}

export interface labelProf {
	label: string
}

export interface profClicked {
	data: Array<detailProf>
	label: Array<labelProf>
}

const Prof = () => {
	const [tableModel, setTableModel] = useState(profTab)
	let listProf = useSelector((state: RootState) => state.prof.list_Prof)
	useEffect(() => {
		getProf().then((res: any) => {
			initTable(res)
		})
	}, [])


	useEffect(()=>{
		initTable(listProf)
	},[listProf])



	const receive = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				// navigate('/prof/detail/2')
				console.log(listProf[data.index]._id)
				break;
			case 'delete':
				deleteProf(listProf[data.index]._id).then((res)=>{
					getProf().then((res: any) => {
						initTable(res)
					})
				})

				break;
		}
	}
	const initTable=(res:any)=>{
		let temp = tableModel
		temp.data = res?.map((item:any) => ({
			name: item.name,
			mail: item.mail,
			tel: item.tel,
		}))
		setTableModel({...temp})
	}

	return (
		<div className={'directorMain'}>
			<FilterForm filterData={ProfFilterForm}/>
			<TabForm filterData={{...tableModel, sendEventToParent: receive}}/>
		</div>
	)
}

export default Prof