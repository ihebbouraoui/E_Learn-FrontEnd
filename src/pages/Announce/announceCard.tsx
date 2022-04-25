import React, {useEffect, useRef, useState} from "react";
// @ts-ignore
import comment from "../../assets/comment-dots-svgrepo-com.svg";
import Meta from "antd/es/card/Meta";
import './AnnounceCard.css'
import {Avatar, Button, Card} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setListComment, setSelectedAnnounce} from "../../store/modules/Announce/announceModule";
import {useLocation, useNavigate} from "react-router-dom";
import {getAnnounce, getCommentByIdAnnounce, postComment, signaler} from "../../store/modules/Announce/announceService";
// @ts-ignore
import sendMessage from '../../assets/message-svgrepo-com.svg'
// @ts-ignore
import like from '../../assets/like-svgrepo-com.svg'
// @ts-ignore
import alert from '../../assets/alert-svgrepo-com.svg'
// @ts-ignore
import back from '../../assets/arrow-forward-svgrepo-com.svg'
import {RootState} from "../../store/store";

const AnnounceCard: React.FC<{ item: any }> = ({item}) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation();
	const [commentZone, setCommentZone] = useState<any>(false)
	const userConnect = useSelector((state: RootState) => state.auth.userLogged)
	const [height,setHight]=useState<any>('50px')
    const [visible,setVisible]=useState<any>(false)
	const goToDetail = (item: any) => {
		dispatch(setSelectedAnnounce(item));
		navigate('/detailAnnounce')

	}
	useEffect(()=>{
		if (item.comment){
			setVisible(!visible)
			setHight('200px')
		}
	},[])
	const changeComme = () => {
		setCommentZone(!commentZone)
		!visible ? setVisible(visible) : setVisible(!visible)
	}
	useEffect(()=>{
        getAnnounce().then()
	},[])

	const addSignal = () => {
		//console.log(item)
		signaler({
			userToSignal: item?.postBy?._id,
			SignalFrom: userConnect?.user?._id,
			data: 'probleme technique',
			date: '20/20/1232'
		}).then()
	}
	const commentaire = useRef<{ [key: string]: string | number }>({})

	const newComment = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
		commentaire.current[name] = event.target.value.trim();
		Object.keys(commentaire.current).forEach((key) => {
			if (commentaire.current[key] === null || commentaire.current[key]?.toString()?.trim() === '') {
				commentaire.current[key] = ''
			}
		})
	}
	return (
		<div className={'announce'}>
			{location.pathname === '/detailAnnounce' &&
            <img src={back} alt={''} onClick={() => navigate(-1)}/>}

			<div className={'card'}>
				<div className={'topLevel'}>
					<div className={'detailUser'}>
						<img alt={''} className={'logo'} style={{width: '60px'}} src={item?.postBy?.photo}/>
						<p className={"detailConnecazet"}> {item?.postBy?.name} </p>
					</div>
					<div className={'detailDate'}>
						<p className={'detailConnect'} style={{right: '83%'}}>
							{item?.date}
						</p>
						<p className={'hour'} style={{left: '83%'}}>
							{item?.hour}
						</p>

					</div>
					<div className={'photoAnnounce'}>
						{item?.photo && <img alt={''} src={item?.photo}/>}
					</div>
					<div className={'bottom'}>
						<div className={'bottomTop'}>
							<p> {item?.type}</p>
							<span> {item?.data}</span>
						</div>
						<hr/>
						<div className={'bottomBot'}>
							<div className={'likes'}>
								<img alt={''} src={like} style={{width: '30px', position: 'relative', right: '92%',backgroundColor:'white'}}/>
								<p style={{fontSize: '18px', position: 'relative', right: '92.8%'}}> {item?.like} </p>
							</div>
							<div className={'tache'}>
								{location.pathname === '/social_media' &&
                                <Button type={'link'} style={{position: 'relative', top: '30px'}}
                                        onClick={() => goToDetail(item)}> انقر لقراءة المزيد </Button>}
								<img alt={''}
									 style={{position: 'relative', bottom: '60px', left: '100px', width: '30px',cursor:'pointer'}}
									 src={alert}/>
								<img alt={''}
									 style={{position: 'relative', bottom: '60px', width: '30px', left: '70px',cursor:'pointer'}}
									 src={sendMessage} onClick={() => changeComme()}/>
							</div>

						</div>


					</div>

				</div>

			</div>
			{!commentZone && !visible && <div className={'commentZone'}>
                <div className={'commentaire'} style={{height:`${height}`}}>
					{item?.comment?.map((el:any)=>(
						<div style={{display: "flex"}}>
							<img src={el?.userId?.photo}
								 style={{margin: "20px", width: '50px', borderRadius: '30px'}}/>
							<p style={{
								fontStyle: 'italic',
								fontSize: '15px',
								fontWeight: 'bold',
								paddingRight: '30px',
								margin: '20px',
								// backgroundColor: '#8080806e',
								width: '30%',
								borderRadius: '40px',
								paddingTop:'10px',
								height:'50px',
								position:"relative",
								left:'30px',
								wordBreak:'break-word',
							}}> {el?.data} </p>

						</div>
					))}

                </div>
                <div className={'zoneInput'} style={{display: 'flex',justifyContent:'space-evenly'}}>
                    <input placeholder={'ادخل تعليقك هتا'}
                           style={{
							   width: '75%',
							   height: '57px',
							   borderRadius: '50px',
							   fontSize: '15px',
							   fontStyle: 'italic',
							   fontWeight: 'bold',
							   color: 'black',
							   wordBreak:'break-word'

						   }}
                           onChange={(e) => newComment(e, 'password')}
					/>
                    <button style={{
						width: '20%',
						borderRadius: '30px',
						backgroundColor: 'rgb(50 97 185 / 82%)',
						height: '40px',
						color: 'white',
						fontSize: '15px',
						fontStyle: 'italic',
						position:"relative",
						top:'10px',
						fontWeight: 'bolder'
					}} onClick={()=>postComment({_id:item._id,userId:userConnect?.user?._id,data:commentaire.current?.password,date:'20/10/12'})}> valdier
                    </button>
                </div>

            </div>}


		</div>
	)
}
export default AnnounceCard