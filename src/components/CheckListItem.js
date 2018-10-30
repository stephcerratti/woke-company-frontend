import React from 'react';
import listitem from './checklistitems.json';

const CheckListItem = props => {
	console.log(listitem);
	return (
		<ul className="list-reset"> 
			{listitem.companyRequirements.map((key, i) => 
				<li><input id={`checkbox-${i}`} type="checkbox" value="item"/><label htmlFor={`checkbox-${i}`}>{key.requirement}</label></li>
			)}
		</ul>
		
		)
}

export default CheckListItem;