import {TabConfigInterface} from "../../../../component/Tableau/tableauxForm";

export const examEtudiantTab: TabConfigInterface = {
	headers: [
		{
			label: ' الواجب'
		},
		{
			label: 'اسم الستاذ '
		},
		{
			label: 'المادة '
		},
		{
			label: 'العمليات '
		},
	],
	data: [
		{
			name: 'الاختبار 1  ',
			email: ' محمد صالح ',
			task:'رياضيات',


		},
		{
			name: 'الاختبار 1  ',
			email: ' محمد صالح ',
			task:'رياضيات',

		},
		{
			name: 'الاختبار 1  ',
			email: ' محمد صالح ',
			task:'رياضيات',

		},
	],
	btnConfig: [
		{
			name: 'تنزيل  ',
			style: 'btn-success',
		}

	]
}