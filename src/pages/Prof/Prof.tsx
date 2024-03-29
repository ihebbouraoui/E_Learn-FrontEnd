import React, {useEffect, useState} from "react";
import FilterForm from "../../component/Filter/filterForm";
import {ProfFilterForm, profTab} from "./profConsts";
import TabForm, {btnInetrface} from "../../component/Tableau/tableauxForm";
import {deleteProf, getProf} from "../../store/modules/Prof/profService";
import {useSelector} from "react-redux";
import {RootState, store} from "../../store/store";
import {useNavigate} from "react-router-dom";
import {setSelectedProf} from "../../store/modules/Prof/profModule";

export interface detailProf {
	name: string,
	mail: string,
	tel: string
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


const navigate=useNavigate()
	const receive = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				store.dispatch(setSelectedProf(listProf[data.index]))
				navigate('/prof/detail/:id')
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