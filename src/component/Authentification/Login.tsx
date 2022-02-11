import React from "react";
import FilterForm from "../Filter/filterForm";
import {loginForm} from "./loginConst";

const Login=()=>{
	return(
		<div className={'login'} >
			<div className={'formLogin'}>
				<FilterForm filterData={loginForm}/>
			</div>
		</div>
	)

}
export default Login