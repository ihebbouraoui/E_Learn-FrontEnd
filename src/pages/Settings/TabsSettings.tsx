import React, {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import './TabsSetting.css'

const TabsSettings = () => {
	const Links = [
		{link: "الفصول"},
		{link: 'المواد'},
		{link: 'قائمة الاسعار'},
		{link: 'الشروط و الاحكام'},
	]

	let navigate = useNavigate()
	const [selected, setSelected] = useState(0)
	const navigator = (index: number) => {
		setSelected(index)
		switch (index) {

			case 0 :
				navigate('/setting')
				break;
			case 1:
				navigate('/setting/ressource')
				break;
			case 2:
				navigate('/setting/price')
				break;
			default:
				navigate('/setting')
		}

	}
	return (

		<div className={'tabsForm'}>

			<div className={'tabsContainer'}>
				{Links.map((item: any, index: number) => (
						<div className={`tabs ${selected === index}`} onClick={() => navigator(index)}>
							{item?.link}
						</div>
					)
				)}
			</div>

			<Outlet/>
		</div>

	)
}
export default TabsSettings