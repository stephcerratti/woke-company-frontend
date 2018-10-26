import React from 'react';
import listitem from './checklistitems.json';

const CheckListItem = props => {
	console.log(listitem);
	return (
		<ul>
			{listitem.companyRequirements.map(key => 
				<li><input type="checkbox" value="item"/>{key.requirement}</li>
			)}
		</ul>
		
		)
}

export default CheckListItem;