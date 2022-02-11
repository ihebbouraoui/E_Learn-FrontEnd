import React, {useEffect} from 'react';
import {Routes, Route, Link, BrowserRouter as Router, Navigate} from "react-router-dom";

import './App.css';
import SiderBarAdmin from "./component/Sider/SiderBarAdmin";
import NavBar from "./component/NavBar/NavBar";
import Director from "./pages/Director/Director";
import Prof from "./pages/Prof/Prof";
import Etudiant from "./pages/Etudiant/etudiant";
import Abonnement from "./pages/Abonnement/Abonnement";
import Transfer from "./pages/Transfer/Transfers";
import Notification from "./pages/notifications/Notifications";
import TabsSettings from "./pages/Settings/TabsSettings";
import Chapter from "./pages/Settings/Chapter/Chapteer";
import Ressources from "./pages/Settings/Ressource/Ressource";
import Prices from "./pages/Settings/Prices/price";
import DetailProf from "./pages/Prof/detailProf";
import ClasseInfo from "./pages/Prof/ProfDetailSideBar/Classes/classeInfo";
import HomeWork from "./pages/Prof/ProfDetailSideBar/HomeWork/homeWork";
import ExamProf from "./pages/Prof/ProfDetailSideBar/Exam/examProf";
import Follow from "./pages/Prof/ProfDetailSideBar/FollowRecord/Follow";
import DetailEtudiant from "./pages/Etudiant/DetailEtudiant/detailEtudiant";
import HomeWordEtudiant from "./pages/Etudiant/DetailEtudiant/HomeWorkEtudiant/homeWordEtudiant";
import ExamEtudiant from "./pages/Etudiant/DetailEtudiant/ExamEtudiant/examEtudiant";
import Stat from "./pages/Stats/stat";
import addNewDirector from "./pages/Director/addNewDirector";
import AddNewDirector from "./pages/Director/addNewDirector";
// @ts-ignore
import loader from './assets/loader-svgrepo-com.svg'
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import Login from "./component/Authentification/Login";

function App() {
	const isLoding = useSelector((state: RootState) => state.auth.isLoading)
	let isLogged = useSelector((state: RootState) => state.auth.isLogged)

	return (
		<div>
			{isLogged ?
				<Router>
					{isLoding && <div className={'loader'}>
                        <img draggable={false} className={'loaderImage'} alt={''} src={loader}/>
                    </div>}
					<NavBar/>
					<SiderBarAdmin/>
					<div className={'bodyContainer'}>
						<Routes>
							<Route path={'/director'} element={<Director/>}/>
							<Route path={'*'} element={<Navigate to={'/director'}/>}/>
							<Route path={'/prof'} element={<Prof/>}/>
							<Route path={'/prof/detail/:id'} element={<DetailProf/>}>
								<Route path={'/prof/detail/:id/homework'} element={<HomeWork/>}/>
								<Route path={'/prof/detail/:id/exam'} element={<ExamProf/>}/>
								<Route path={'/prof/detail/:id/follow'} element={<Follow/>}/>
								<Route index element={<ClasseInfo/>}/>
							</Route>
							<Route path={'/etudiant'} element={<Etudiant/>}/>
							<Route path={'/etudiant/detail/:id'} element={<DetailEtudiant/>}>
								<Route index element={<HomeWordEtudiant/>}/>
								<Route path={'/etudiant/detail/:id/exam'} element={<ExamEtudiant/>}/>

							</Route>

							<Route path={'/abonnement'} element={<Abonnement/>}/>
							<Route path={'/transfer'} element={<Transfer/>}/>
							<Route path={'/notification'} element={<Notification/>}/>
							<Route path={'/setting'} element={<TabsSettings/>}>
								<Route path={'/setting/ressource'} element={<Ressources/>}/>
								<Route path={'/setting/price'} element={<Prices/>}/>
								<Route index element={<Chapter/>}/>
							</Route>
							<Route path={'/stat'} element={<Stat/>}/>
							<Route path={'/ajout'} element={<AddNewDirector/>}/>

							<Route path={'/login'} element={<Login/>}/>
						</Routes>
					</div>
				</Router>:

			      <div className={'bodyContainer'}>
					  <Login/>
				  </div>

			}


		</div>

	);
}

export default App;
