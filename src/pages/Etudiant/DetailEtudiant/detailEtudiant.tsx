import React from "react";
import {ProfClick} from "../../Prof/profConsts";
import {detailProf} from "../../Prof/Prof";
import {etudiantClickedd, EtudiantClickedFilterForm} from "../etudiantConsts";
import SideBarEtudiant from "./SideBarEtudiant";
import FilterForm from "../../../component/Filter/filterForm";
import './detailEtudiant.css'
import {useNavigate} from "react-router-dom";
// @ts-ignore
import BackImage from '../../../assets/arrow-forward-svgrepo-com.svg'
export interface etudiantData {
	nom:string,
	class:string,
	cin:string
}
export interface etudiantClicked{
	data:Array<etudiantData>
}
const DetailEtudiant=()=>{
	const navi=useNavigate()
	const navigate=()=>{
		navi(-1)
	}
	return(
		<div className={'detailEtudiant'}>
			<div className={'detailEtudiantHaut'}>


			<div className={'infoEtudiant'}>
				{
					etudiantClickedd.data.map((item:etudiantData)=>{
							return(
								<div className={'infoProf'}>
									<img alt={''} draggable={false} src={BackImage} onClick={navigate} style={{width:'40',height:40,paddingBottom:10,cursor:'pointer'}}/>

									<p>
										الاسم: {item.nom}
									</p>
									<p>
										اسم الصف : 	{item.class}
									</p>
									<p>
										رقم السجل المدني:	{item.cin}
									</p>
								</div>
							)

						}
					)
				}
			</div>
			<div className={'etudiantClickedForm'}>
				<FilterForm filterData={EtudiantClickedFilterForm}/>
			</div>

		</div>
        <SideBarEtudiant/>
		</div>
	)
}
export default DetailEtudiant