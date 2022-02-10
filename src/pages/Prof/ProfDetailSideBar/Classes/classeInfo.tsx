import React from "react";
import TabForm from "../../../../component/Tableau/tableauxForm";
import {classTabConst} from "./classInfoConst";

const ClasseInfo=()=>{
	return(
		<div className={'directorMain'}>
                 <TabForm filterData={classTabConst}/>
		</div>
	)
}
export default ClasseInfo