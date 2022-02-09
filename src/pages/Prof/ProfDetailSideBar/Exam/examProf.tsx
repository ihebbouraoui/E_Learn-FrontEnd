import React from "react";
import TabForm from "../../../../component/Tableau/tableauxForm";
import {examTabConst} from "./examProfConst";
const ExamProf=()=>{
	return(
		<div>
			<TabForm filterData={examTabConst}/>
		</div>
	)
}
export default ExamProf