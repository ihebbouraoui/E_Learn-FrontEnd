import {FilterConfigInterface} from "../../component/Filter/filterForm";
import {TabConfigInterface} from "../../component/Tableau/tableauxForm";

export const TransferFilterForm: FilterConfigInterface = {
	filterForm: [
		{
			type: 'text',
			label: 'المشتري',
			name: 'name'
		},
		{
			type: 'text',
			label: ' البائع',
			name: 'last_name'
		},
		{
			type: 'date',
			label: 'تاريخ الطلب ',
			name: 'last_name'
		},
		{
			type: 'number',
			label: 'رقم الهاتف',
			name: 'last_name'
		},
	],
	onSubmit: (data: { [key: string]: string | number }) => {
		console.log(data)
	}
}
export const TransferTab: TabConfigInterface = {
	headers: [
		{
			label: 'البائع'
		},
		{
			label: ' المشتري'
		}, {
			label: 'السعر '
		}, {
			label: 'الحالة'
		},
		{
			label: 'تاريخ الطلب'
		}, {
			label: 'العمليات'
		},
	],
	data: [
		{
			name: 'محمد صالح ',
			email: 'احمد صالح ',
			phone: ' 20ريال  ',
			etat: ' غير مسدد',
			date: '  10/12/2022',
		},
		{
			name: 'محمد صالح ',
			email: 'احمد صالح ',
			phone: ' 20ريال  ',
			etat: ' غير مسدد',
			date: '  10/12/2022',
		},
		{
			name: 'محمد صالح ',
			email: 'احمد صالح ',
			phone: ' 20ريال  ',
			etat: ' غير مسدد',
			date: '  10/12/2022',
		},
	],
	btnConfig: [
		{
			name: 'تفاصيل',
			style: 'btn-success',
			type: 'detail'

		},


	]
}