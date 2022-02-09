import React, {useRef} from "react";
import './director.css'
// @ts-ignore
import BackImage from '../../assets/arrow-forward-svgrepo-com.svg'
import {useNavigate} from "react-router-dom";
export const PrivilegeAdmin: {[key: string]: any} = {
	director: {
		add: true, update: false, delete: false
	},
	prof: {
		delete: false
	},
	etudiant: {
		delete: false
	},
	abonnements: {},
	transfer: {
		update: false
	},
	notification: {
		send: false
	},
	setting: {
		update: false
	},
	stat: {}
}
export  const transalte:{[key:string]:string}={
	director: 'قائمة المديرين',
	prof:'قائمة الأساتذة',
	etudiant:'قائمة الطلبة',
	abonnements:'الاشتراكات' ,
	transfer:'العمليات المالية' ,
	notification:'الاشعارات' ,
	setting:'الاعدادات' ,
	stat: 'احصائيات',
	delete:'حذف',
	update:'تعديل',
	add:'اضافة',
	send:'ارسال'

}


const AddNewDirector = () => {
	const navi=useNavigate()
	const navigate=()=>{
		navi(-1)
	}
	  const onSubmit= (data: { [key: string]: string | number }) => {
		  console.log(data)
	}
	const FiltreNewAdmin = useRef<{ [key: string]: string | number }>({})
	const formHasChanged = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
		FiltreNewAdmin.current[name] = event.target.value;
		Object.keys(FiltreNewAdmin.current).forEach((key) => {
			if (FiltreNewAdmin.current[key] === null || FiltreNewAdmin.current[key]?.toString()?.trim() === '') {
				delete FiltreNewAdmin.current[key]
			}
		})
	}
	return (
		<div>
		<div className={'filterContainer'}>
			<div className={''}>
				<img alt={''} draggable={false} src={BackImage} onClick={navigate} style={{width:'40',height:40,paddingBottom:10,cursor:'pointer'}}/>

				<div className={'formAddDirector'}>
					<input type={'text'} placeholder={'الأسم'}/>
					<input type={'text'} placeholder={'اسم العاثلة'}/>
					<input type={'text'} placeholder={'الهاتف الجواال'}/>
					<input type={'text'} placeholder={'البريد الألكتروني'}/>
					<input type={'text'} placeholder={'كلمة السر'}/>
					<input type={'text'} placeholder={'تاكيد كلمة السر'}/>
				</div>
				<hr style={{marginTop:'20px'}}/>
			</div>
			{
				Object.keys(PrivilegeAdmin).map((item: string) => {
					return (
						<div className={'permissionContainer'} >
							<div className={'section'}>
								<input  style={{minHeight:'unset'}} type={'checkbox'} value={'false'} defaultChecked={true} id={item} name={item}
										onChange={(e) => formHasChanged(e, item)}
								/>
								<label htmlFor={item}> {transalte[item]}  </label>
							</div>
								<div className={'sectionItemContainer'}>
								{
									Object.keys(PrivilegeAdmin[item]).map((el: any,index:number) =>{
										return(
											<div className={'sectionItem'}>
												<input  style={{minHeight:'unset'}} type={'checkbox'} defaultChecked={PrivilegeAdmin[item][el]} id={el+index+item} name={el}

												/>
												<label htmlFor={el+index+item}> {transalte[el]}</label>
											</div>
										)
									})
								}
							</div>

						</div>
					)
				})
			}
			<hr/>
			<button className={'btn-success'} style={{fontSize:'20px'}} onClick={() => onSubmit(FiltreNewAdmin.current)}> حفظ</button>
		</div>
		</div>
	)

}
export default AddNewDirector