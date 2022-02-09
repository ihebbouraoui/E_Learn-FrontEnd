import React from "react";
import FilterForm from "../../../component/Filter/filterForm";

import {SeasonFormConst} from "./ChapterConsst";

const Chapters = () => {
	return (
		<div className={'directorMain'}>
			<FilterForm filterData={SeasonFormConst}/>

		</div>
	)

}
export default Chapters