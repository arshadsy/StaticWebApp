import { useState } from 'react'

const styles = { border: "2px black solid", width: "fit-content", paddingLeft: "5px", paddingRight: "5px", borderRadius: "30%", margin: 'auto' }


export const DataNode = ({ data, children, ...props }) => {

	const [showDetails, setShowDetails] = useState(false);
	let nextNodes = [];
	for (const ob in data) {
		if (typeof data[ob] === 'object' && Array.isArray(data[ob]) === false) {
			nextNodes.push(ob)
		}
	}
	const nameClickHandle = () => {
		setShowDetails(true);
	}

	const { name, domain, technologies_involved, description, responsibilities, role, team_size } = data;
	return (<>
		{name && <div>
			<div style={{ ...styles }} onClick={nameClickHandle}>
				{name}
			</div>
			<div style={{ display: showDetails ? 'block' : 'none' }}>
				{domain}
				{role}
				{technologies_involved}
				{description}
				{responsibilities}
				{team_size}
			</div>
		</div >}
	</>);
}
