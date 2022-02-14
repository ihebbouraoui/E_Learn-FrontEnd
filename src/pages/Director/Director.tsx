import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import FilterForm from "../../component/Filter/filterForm";
import {DirectorFilterForm, DirectorTab} from "./directorConsts";
import TabForm, {btnInetrface} from "../../component/Tableau/tableauxForm";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, store} from "../../store/store";
import {deleteDirector, GetDirector} from "../../store/modules/Director/directorService";
import {setListDirector} from "../../store/modules/Director/directorModule";

const Director = () => {
	const navi = useNavigate()
	const receive = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				console.log('DETAIL')
				console.log(DirectorTab.data[data.index])

				break;
			case 'delete':
				deleteDirector(listDirector[data.index]._id).then((res:any)=>{
					GetDirector().then((res:any)=>{
						initTable(res)
					})
				})

				break;
		}
	}
	const navigate = () => {
		navi('/ajout')
	}
	const [tableModel, setTableModel] = useState(DirectorTab)
	const listDirector = useSelector((state:RootState)=>state.director.list_director)

	useEffect(()=>{
		initTable(listDirector)
	},[listDirector])

	useEffect(()=> {
		GetDirector().then((res:any)=>{
			initTable(res)
		})

	}, [])

	const initTable=(res:any)=>{
		let temp = tableModel
		temp.data = res?.map((item: any) => ({
			name: item.name,
			username:item.username,
			mail: item.mail,
			tel: item.tel,
		}))
		setTableModel({...temp})
	}
	return (
		<div className={'directorMain'}>
			<FilterForm filterData={DirectorFilterForm}/>
			<button className={'btn-success'}
					style={{padding: 15, backgroundColor: 'rgb(76, 112, 142)', width: '150px', margin: '0 20px'}}
					onClick={navigate}
			> اضافة
				مدير
			</button>
			{

				<TabForm filterData={{...tableModel, sendEventToParent: receive}}/>


			}
		</div>
	)

}
export default Director