import React from "react";
import TabForm from "../../../../component/Tableau/tableauxForm";
import {HomeWorkTab} from "./homeWorkConst";
const HomeWork=()=>{
	return(
		<div className={''}>
          <TabForm filterData={HomeWorkTab}/>
		</div>
	)
}
export default HomeWork