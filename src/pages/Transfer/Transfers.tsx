import React, {useState} from "react";
import FilterForm from "../../component/Filter/filterForm";
import {TransferFilterForm, TransferTab} from "./TransfersConsts";
import TabForm from "../../component/Tableau/tableauxForm";
import ModalComp from "../../component/Modal/modalComp";


const Transfer = () => {
	const   [isModal,setModal]=useState(false)
	const closeEvent=()=>{
		setModal(false)
	}
	const openModal=()=> {
		setModal(true)
	}
	const DetailTransfer=()=> {
		return (
			<div className={'detailTransfer'}>
				<div className={'methodePaiment'}>
					<h3> طريقة السداد</h3>

				 	<input  type={'radio'}/>
					<input type={'radio'}/>
					<input type={'radio'}/>

				</div>
				<div className={'comm'}>
					<h3> طريقة السداد</h3>

					<textarea style={{width:'100%',border:'unset',resize:'none'}} rows={5} placeholder={'الملاحضات'} />
				</div>
				<div>
					<button className={'btn-success'}> حفظ</button>
				</div>

			</div>
		)
	}

		return (
		<div className={'directorMain'}>
			<FilterForm filterData={TransferFilterForm}/>
			<TabForm filterData={{...TransferTab,sendEventToParent:openModal}}/>
			{isModal && <ModalComp config={{element:DetailTransfer(),onCloseEvent:()=>closeEvent()}}/>}

		</div>

	)

}
export default Transfer