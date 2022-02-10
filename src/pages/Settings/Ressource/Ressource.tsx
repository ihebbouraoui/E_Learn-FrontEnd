import React from "react";
import FilterForm from "../../../component/Filter/filterForm";
import {RessourceFormConst, ressourceTab} from "./RessourceConst";
import TabForm from "../../../component/Tableau/tableauxForm";


const Ressources = () => {
	return (
		<div className={'directorMain'}>
			<FilterForm filterData={RessourceFormConst}/>
			<TabForm filterData={ressourceTab}/>
		</div>
	)

}
export default Ressources