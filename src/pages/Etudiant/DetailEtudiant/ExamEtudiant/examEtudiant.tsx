import React from "react";
import TabForm from "../../../../component/Tableau/tableauxForm";
import {examEtudiantTab} from "./examEtudiantConst";
const ExamEtudiant=()=>{
	return(
		<div>
			<TabForm filterData={examEtudiantTab}/>
		</div>
	)
}
export default ExamEtudiant