import React from "react";
import {ProfClick} from "./profConsts";
import Prof, {detailProf, } from "./Prof";
import SideBardProf from "./SideBardProf";
import './sideBarProf.css'
// @ts-ignore
import BackImage from '../../assets/arrow-forward-svgrepo-com.svg'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const DetailProf=()=>{

	const navi=useNavigate()
	const selectedProf=useSelector((state:RootState)=>state.prof.selected_Prof)
	const navigate=()=>{
		navi(-1)
	}
	console.log(selectedProf.name)

	return(
		<div className={'detailProf'}>

							<div className={'infoProf'}>
								<img alt={''} draggable={false} src={BackImage} onClick={navigate} style={{width:'40',height:40,paddingBottom:10,cursor:'pointer'}}/>

								<p>
									الاسم: {selectedProf.name}
								</p>
								<p>
								رقم الهاتف : 	{selectedProf.tel}
								</p>
								<p>
								البريد الالكتروني:	{selectedProf.mail
								}
								</p>
							</div>





              <SideBardProf/>

		</div>
	)
}
export default DetailProf