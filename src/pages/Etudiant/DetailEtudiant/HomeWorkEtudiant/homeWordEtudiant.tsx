import React from "react";
import TabForm from "../../../../component/Tableau/tableauxForm";
import {HomeWordEtudiantTab} from "./homeWorkEtudiantConst";
const HomeWordEtudiant=()=>{
	return(
		<div>
			<TabForm filterData={HomeWordEtudiantTab}/>
		</div>
	)
}
export default HomeWordEtudiant