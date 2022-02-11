import React, {useState} from "react";
import './Navbar.css'
import ModalComp from "../Modal/modalComp";

const NavBar=()=>{

	const   [isModal,setModal]=useState(false)
	const closeEvent=()=>{
		setModal(false)
	}
	const componentLogin=()=>{
		return(
			<div className={'login'} >
				<div className={'formLogin'}>

         <form onSubmit={()=>alert("qsd")}>
		   <label>  اسم المستخدم :     <input style={{backgroundColor:'#f0f2f5'}} placeholder={'example@gmail.com '}/> </label>
			<label>   كلمة السر : <input style={{backgroundColor:'#f0f2f5'}} placeholder={'........'}/></label>
				<button type={"submit"}  className={'btn-success'}> دخول </button>
		 </form>
				</div>
			</div>
		)
	}

	return(
		<div>
			<div className={'navbar'}>

				<div className={'path'}>
					qsdqsdqsdq
				</div>
				<div className={'Auth'}>
					<button className={'btn-success'} onClick={()=>setModal(true)}> Login </button>

				</div>
			</div>
			<div style={{height: '50px'}}/>
			{isModal && <ModalComp config={{element:componentLogin(),onCloseEvent:()=>closeEvent()}}/>}

		</div>
	)
}
export default NavBar