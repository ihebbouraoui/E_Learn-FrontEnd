import React from "react";
import {ProfClick} from "./profConsts";
import Prof, {detailProf, } from "./Prof";
import SideBardProf from "./SideBardProf";
import './sideBarProf.css'
// @ts-ignore
import BackImage from '../../assets/arrow-forward-svgrepo-com.svg'
import {useNavigate} from "react-router-dom";

const DetailProf=()=>{

	const navi=useNavigate()
	const navigate=()=>{
		navi(-1)
	}

	return(
		<div className={'detailProf'}>
			{
				ProfClick.data.map((item:detailProf)=>{
						return(
							<div className={'infoProf'}>
								<img alt={''} draggable={false} src={BackImage} onClick={navigate} style={{width:'40',height:40,paddingBottom:10,cursor:'pointer'}}/>

								<p>
									الاسم: {item.nom}
								</p>
								<p>
								رقم الهاتف : 	{item.phone}
								</p>
								<p>
								البريد الالكتروني:	{item.email}
								</p>
							</div>
						)

						}
					)
				}

              <SideBardProf/>

		</div>
	)
}
export default DetailProf