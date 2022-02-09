import {FilterConfigInterface} from "../../component/Filter/filterForm";
import {TabConfigInterface} from "../../component/Tableau/tableauxForm";

export const AbonnementFormConst: FilterConfigInterface = {
	filterForm: [
		{
			type: 'number',
			label: 'رقم الأشتراك',
			name: 'name'
		},
		{
			type: 'number',
			label: 'المدة',
			name: 'last_name'
		},
		{
			type: 'number',
			label: 'القيمة',
			name: 'last_name'
		},
		{
			type: 'date',
			label: 'تاريخ الأشتراك',
			name: 'last_name'
		},
		{
			type: 'date',
			label: 'تاريخ الأنتهاء',
			name: 'last_name'
		},
	],
	onSubmit: (data: { [key: string]: string | number }) => {
		console.log(data)
	},

}
export const AbonnementTab: TabConfigInterface = {
	headers: [

		{
			label: 'اسم المعلم'
		},
		{
			label: 'المدة'
		}, {
			label: 'القيمة'
		}, {
			label: 'تاريخ الشتراك'
		}, {
			label: 'تاريخ الانتهاء'
		},
		{
			label: 'المدة المتبقية'
		},
	],
	data: [
		{
			name: 'محمد صالح ',
			duration: '7 اشهر  ',
			value: ' 20 ريال ',
			dateDebut: '20/01/2022',
			dateFin: '20/05/2022',
			dateReset: '5 ايام'
		},
		{
			name: 'محمد صالح ',
			duration: '7 اشهر  ',
			value: ' 20 ريال ',
			dateDebut: '20/01/2022',
			dateFin: '20/05/2022',
			dateReset: '5 ايام'
		},
		{
			name: 'محمد صالح ',
			duration: '7 اشهر  ',
			value: ' 20 ريال ',
			dateDebut: '20/01/2022',
			dateFin: '20/05/2022',
			dateReset: '5 ايام'
		},

	],
	btnConfig: []

}