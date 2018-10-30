import React from 'react';
import CheckListItem from "./CheckListItem.js";

const CheckList = props => {
	return (
		<div className="max-w-sm text-justify">
			<h2 className="text-center"> Company Checklist</h2>
			<CheckListItem />
		</div>
	)
}

export default CheckList;