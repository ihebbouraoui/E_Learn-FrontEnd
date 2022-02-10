import {FilterConfigInterface} from "../../component/Filter/filterForm";
import {TabConfigInterface} from "../../component/Tableau/tableauxForm";
import {filterDirector, GetDirector} from "../../store/modules/Director/directorService";
import {useEffect} from "react";

export const DirectorFilterForm: FilterConfigInterface = {
	filterForm: [
		{
			type: 'text',
			label: 'الاسم',
			name: 'name_Director'
		},
		{
			type: 'email',
			label: 'البريد الالكتروني',
			name: 'mail_Director'
		},
		{
			type: 'text',
			label: 'أسم المستخدم',
			name: 'username_Director'
		},
		{
			type: 'number',
			label: 'رقم الهاتف',
			name: 'tel_Director'
		},
	],
	onSubmit: (data: { [key: string]: string | number }) => {
		filterDirector(data).then()}

}

export const DirectorTab: TabConfigInterface = {
	headers: [

		{
			label: 'الاسم'
		},
		{
			label: 'اسم المتخدم'
		}, {
			label: 'البريد الألكتروني'
		}, {
			label: 'رقم الهاتف'
		}, {
			label: 'العمليات'
		},
	],

	data: [


	],
	btnConfig: [
		{
			name: 'تفاصيل',
			style: 'btn-success',
			type: 'detail'
		},
		{
			name: 'حذف',
			style: 'btn-error',
			type: 'delete'
		}

	]
}
export const DirectorAddForm: FilterConfigInterface = {
	filterForm: [
		{
			type: 'text',
			label: 'الاسم',
			name: 'name'
		},
		{
			type: 'email',
			label: 'البريد الالكتروني',
			name: 'last_name'
		},
		{
			type: 'text',
			label: 'أسم العائلة',
			name: 'last_name'
		},
		{
			type: 'number',
			label: 'رقم الهاتف',
			name: 'last_name'
		},
		{
			type: 'text',
			label: 'كلمة السر',
			name: 'password'
		},
		{
			type: 'text',
			label: 'تاكيد كلمة السر',
			name: 'confirm password'
		},
	],
	onSubmit: (data: { [key: string]: string | number }) => {
		console.log(data)
	}
}
