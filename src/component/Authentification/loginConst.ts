import {FilterConfigInterface} from "../Filter/filterForm";

export const loginForm: FilterConfigInterface = {
	filterForm: [
		{
			type: 'text',
			label: 'الاسم',
			name: 'email'
		},
		{
			type: 'email',
			label: 'البريد الالكتروني',
			name: 'password'
		},

	],
	onSubmit: (data: { [key: string]: string | number }) => {
		console.log(data)
	}

}