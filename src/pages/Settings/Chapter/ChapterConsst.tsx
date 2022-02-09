import {FilterConfigInterface} from "../../../component/Filter/filterForm";

export const SeasonFormConst: FilterConfigInterface = {
	filterForm: [
		{
			type: 'textarea',
			label: 'ادخل اسم الفصل ...',
			name: 'name'
		},

	],
	onSubmit: (data: {[key:string]: string | number}) => {
		console.log(data)
	}
}