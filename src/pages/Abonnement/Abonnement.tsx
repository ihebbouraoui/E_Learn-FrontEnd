import React from "react";
import FilterForm from "../../component/Filter/filterForm";
import {AbonnementFormConst, AbonnementTab} from "./abonnementConts";
import TabForm from "../../component/Tableau/tableauxForm";

const Abonnement = () => {
	return (
		<div className={'directorMain'}>
			<FilterForm filterData={AbonnementFormConst}/>
			<TabForm filterData={AbonnementTab}/>
		</div>
	)
}
export default Abonnement