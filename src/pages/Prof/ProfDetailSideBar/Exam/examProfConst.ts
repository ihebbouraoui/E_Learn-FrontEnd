import {TabConfigInterface} from "../../../../component/Tableau/tableauxForm";

export const examTabConst: TabConfigInterface = {
	headers: [
		{
			label: 'اسم الاختبار'
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
			email: ' علوم ',

		},
		{
			name: 'الاختبار 1  ',
			email: ' علوم ',

		},
		{
			name: 'الاختبار 1  ',
			email: ' علوم ',

		},
	],
	btnConfig: [
		{
			name: 'تنزيل  الاختبار',
			style: 'btn-success',
		}

	]
}