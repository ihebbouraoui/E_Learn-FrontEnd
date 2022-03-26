import React, {useRef, useState} from "react";
import '../mainPageProf/mainPageProf.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {toBase64} from "../../../component/Const/const";
import {updateProf} from "../../../store/modules/Prof/profService";
import {log} from "util";
import {setUserLogged} from "../../../store/modules/Auth/AuthModule";

const MainPageProf = () => {
	const UserLogged = useSelector((state: RootState) => state.auth.userLogged)
	const dispatch=useDispatch()
	const [imageSRC, setImageSRC] = useState<Array<string>>([]);
	const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event?.target?.files) {
			toBase64(event.target.files[0]).then((res:any) => {
				setImageSRC([...imageSRC, res as string]);
				updateProf({photo:res},UserLogged?.user?._id).then(()=>{
					dispatch(setUserLogged({...UserLogged,photo:res}))
			})
		})}
	}
	return (
		<div className={'myProfil'}>
			<div className={'profilCard'}>
				<div className={'photo'}>
					<img alt={''} src={UserLogged?.user?.photo}/>
					<span>					<input type="file" accept="image/*" onChange={uploadImage} style={{marginLeft: 20, fontSize: 10}}/>
</span>
				</div>

				<div className={'infoUser'}>
					<p> الاسم: {UserLogged?.user?.name}</p>
					<p> البريد : {UserLogged?.user?.mail} </p>
					<p> رقم العاتف : {UserLogged?.user?.tel} </p>
					<p> الاسم المستخدم : {UserLogged?.user?.username} </p>


				</div>
			</div>
		</div>
	)
}
export default MainPageProf