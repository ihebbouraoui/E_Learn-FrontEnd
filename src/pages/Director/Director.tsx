import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import FilterForm from "../../component/Filter/filterForm";
import {DirectorFilterForm, DirectorTab} from "./directorConsts";
import TabForm, {btnInetrface} from "../../component/Tableau/tableauxForm";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState, store} from "../../store/store";
import {deleteDirector, filterDirector, GetDirector} from "../../store/modules/Director/directorService";
import ModalComp from "../../component/Modal/modalComp";
import {setSelectedDirector} from "../../store/modules/Director/directorModule";

const Director = () => {
	const navi = useNavigate()
	const selected= useSelector((state: RootState) => state.director.selected_director)

	const receive = (data: { index: number, btn: btnInetrface }) => {
		switch (data.btn?.type) {
			case 'detail':
				store.dispatch(setSelectedDirector(DirectorTab.data[data.index]))
				break;
			case 'delete':
				deleteDirector(listDirector[data.index]._id).then((res: any) => {
					GetDirector().then((res: any) => {
						initTable(res)
					})
				})

				break;
		}
	}
	const openModel = () => {
		setModal(true)
	}
	const closeEvent = () => {
		setModal(false)
	}
	const updateForm = useRef<{ [key: string]: string | number }>({})
	const onSubmit = (data: { [key: string]: string | number }) => {
		console.log(data)
	}
	 const formSubmit = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
		updateForm.current[name] = event.target.value.trim();
		Object.keys(updateForm.current).forEach((key) => {
			if (updateForm.current[key] === null || updateForm.current[key]?.toString()?.trim() === '') {
				updateForm.current[key] = ''
			}
		})
	}
	const updateDirector = (selected: any) => {

		return (
			<div className={''}>
				<input type={'text'} defaultValue={selected.name} key={selected.name}
					   onChange={(e) => formSubmit(e, selected.name)}
				/>
				<input type={'text'} defaultValue={selected.username} onChange={(e) => formSubmit(e, selected.username)}
					   key={selected.username}/>
				<input type={'text'} defaultValue={selected.mail} onChange={(e) => formSubmit(e, selected.mail)}
					   key={selected.mail}/>
				<input type={'text'} defaultValue={selected.tel} onChange={(e) => formSubmit(e, selected.tel)}
					   key={selected.tel}/>
				<button className={'btn-success'}
						onClick={() => onSubmit(updateForm.current)}> تاكيد
				</button>
			</div>

		)
	}
	const navigate = () => {
		navi('/ajout')
	}
	const [tableModel, setTableModel] = useState(DirectorTab)
	const listDirector = useSelector((state: RootState) => state.director.list_director)
	const [isModal, setModal] = useState(false)
	useEffect(() => {
		initTable(listDirector)
	}, [listDirector])

	useEffect(() => {
		GetDirector().then((res: any) => {
			initTable(res)
		})

	}, [])

	const initTable = (res: any) => {
		let temp = tableModel
		temp.data = res?.map((item: any) => ({
			id:item._id,
			name: item.name,
			username: item.username,
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

				<TabForm filterData={{...tableModel, sendEventToParent: receive, openModel: openModel}}/>

			}
			{isModal && <ModalComp config={{element: updateDirector(selected), onCloseEvent: () => closeEvent()}}/>}

		</div>
	)

}
export default Director