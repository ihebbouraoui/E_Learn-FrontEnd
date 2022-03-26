import React, {useState} from "react";
import './SideBar.css'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const SiderBarAdmin = () => {
	const links = [
		{link: "المديرين"},
		{link: 'الاساتدة'},
		{link: 'الطلبة'},
		{link: 'الاشتراكات'},
		{link: 'التحويلات'},
		{link: 'الأشعارات'},
		{link: 'الاعدادات'},
		{link: 'إحصائيات'}
	]
	const linksProf=[
		{link:"معلوماتي"},
		{link: 'اقسامي'},
		{link: 'مشاركاتي'},
		{link: 'دردشة'},
	]
	let navigate = useNavigate()
	const [selected, setSelected] = useState(0)
	const userLoged=useSelector((state:RootState)=>state.auth.userLogged)
	const navigator = (index: number) => {
		setSelected(index)
		switch (index) {

			case 0 :
				navigate('/director')
				break;
			case 1:
				navigate('/prof')
				break;
			case 2:
				navigate('/etudiant')
				break;
			case 3:
				navigate('/abonnement')
				break;
			case 4 :
				navigate('/transfer')
				break;
			case 5 :
				navigate('/notification')
				break;
			case 6:
				navigate('/setting')
				break;
			case 7:
				navigate('/stat')
				break;
			default :
				navigate('/director')
				break;
		}

	}
	const navigator2 = (index: number) => {
		setSelected(index)
		switch (index) {

			case 0 :
				navigate('/profilProf')
				break;
			default :
				navigate('/profilProf')
				break;
		}

	}
	return (
		<div className={'siderBar'}>
			<div style={{height: '100px'}}/>

			{ userLoged?.user?.role==='admin'&& links.map((item: any, index: number) => (
					<div className={`sidebarElement ${selected === index}`} onClick={() => navigator(index)}>
						{item?.link}
					</div>
				)
			)}
			{ userLoged?.user?.role==='prof'&& linksProf.map((item: any, index: number) => (
					<div className={`sidebarElement ${selected === index}`} onClick={() => navigator2(index)}>
						{item?.link}
					</div>
				)
			)}

		</div>
	)
}
export default SiderBarAdmin
