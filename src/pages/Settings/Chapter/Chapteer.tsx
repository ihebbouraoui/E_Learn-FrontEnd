import React from "react";
import FilterForm from "../../../component/Filter/filterForm";

import {chapterTab, SeasonFormConst} from "./ChapterConsst";
import TabForm from "../../../component/Tableau/tableauxForm";

const Chapters = () => {
	return (
		<div className={'qsd'}>
			<FilterForm filterData={SeasonFormConst}/>
			<TabForm filterData={chapterTab}/>
		</div>
	)

}
export default Chapters