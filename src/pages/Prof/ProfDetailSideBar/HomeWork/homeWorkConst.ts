import {TabConfigInterface} from "../../../../component/Tableau/tableauxForm";

export const HomeWorkTab: TabConfigInterface = {
	headers: [
		{
			label: 'اسم الواجب'
		},
		{
			label: 'المادة '
		},
		{
			label: 'الصف '
		},
		{
			label: 'العمليات '
		},
	],
	data: [
		{
			name: ' الواجب 1  ',
			email: ' علوم ',
			classe: 'الثاتي المتوسط  ',

		},
		{
			name: ' الواجب 1  ',
			email: ' علوم ',
			classe: 'الثاتي المتوسط  ',

		},
		{
			name: ' الواجب 1  ',
			email: ' علوم ',
			classe: 'الثاتي المتوسط  ',

		},
	],
	btnConfig: [
		{
			name: 'تنزيل الواجب ',
			style: 'btn-success',
		}

	]
}