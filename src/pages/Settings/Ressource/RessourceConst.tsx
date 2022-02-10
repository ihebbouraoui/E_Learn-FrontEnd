import {FilterConfigInterface} from "../../../component/Filter/filterForm";
import {TabConfigInterface} from "../../../component/Tableau/tableauxForm";

export const RessourceFormConst: FilterConfigInterface = {
	filterForm: [
		{
			type: 'textarea',
			label: 'ادخل اسم المادة ...',
			name: 'name'
		},

	],
	onSubmit: (data: { [key: string]: string | number }) => {
		console.log(data)
	}
}
export const ressourceTab: TabConfigInterface = {
	headers: [
		{
			label: 'الاسم المادة'
		},
		{
			label: 'المعمليات '
		},
	],
	data: [
		{
			name: '  علوم ',

		},
		{
			name: '  علوم ',
		},
		{
			name: '  علوم ',
		},
	],
	btnConfig: [
		{
			name: 'تعديل',
			style: 'btn-success',
		},
		{
			name: 'حذف',
			style: 'btn-error',
		}

	]
}