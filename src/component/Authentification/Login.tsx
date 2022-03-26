import React, {useRef} from "react";
import './login.css'
import {AuthLogin} from "../../store/modules/Auth/authService";

const Login=()=>{
	const loginFormRef = useRef<{ [key: string]: string | number }>({})

	const formLogin = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
		loginFormRef.current[name] = event.target.value.trim();
		Object.keys(loginFormRef.current).forEach((key) => {
			if (loginFormRef.current[key] === null || loginFormRef.current[key]?.toString()?.trim() === '') {
				loginFormRef.current[key] = ''
			}
		})
	}
	const login=(data:any)=>{
		AuthLogin({mail:data.current.mail,password:data.current.password}).then((res:any)=>{
			console.log(res)
		})
	}

	return(
		<div className={'login'} >
			<div className={'formLogin'}>
				<input className={'loginInput'} placeholder={'البريد الالكتروني'} type={'text'} name={'mail'}

					   onChange={(e) => formLogin(e, 'mail')}


				/>
				<input className={'loginInput'} placeholder={' كلمة السر'} type={'password'} name={'password'}

					   onChange={(e) => formLogin(e, 'password')}

				/>
				<button className={'btn-success'}
						onClick={() => login(loginFormRef)}> دخول
				</button>
			</div>

		</div>
	)

}
export default Login