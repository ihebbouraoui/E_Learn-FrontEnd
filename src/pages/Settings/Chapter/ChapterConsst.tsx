import {FilterConfigInterface} from "../../../component/Filter/filterForm";
import {TabConfigInterface} from "../../../component/Tableau/tableauxForm";

export const SeasonFormConst: FilterConfigInterface = {
	filterForm: [
		{
			type: 'textarea',
			label: 'ادخل اسم الفصل ...',
			name: 'name'
		},

	],
	onSubmit: (data: { [key: string]: string | number }) => {
		console.log(data)
	}
}
export const chapterTab: TabConfigInterface = {
	headers: [
		{
			label: 'الاسم الفصل'
		},
		{
			label: 'المعمليات '
		},
	],
	data: [
		{
			name: ' المتوسط الثاني ',

		},
		{
			name: ' المتوسط الثاني ',
		},
		{
			name: ' المتوسط الثاني ',
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