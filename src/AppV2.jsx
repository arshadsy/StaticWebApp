import { useState } from 'react'
import { DataNode } from "./data-node";
import profileData from "./data/profiletojson_literal.json";

const screen = {
	height: "100vh",
	justifyContent: "center",
	alignItems: "center",
	display: "flex",
};

function AppV2() {
	const [showHistory, setShowHistory] = useState(false);
	const [showSummary, setShowSummary] = useState(false);
	const [showOptions, setShowOptions] = useState(false);

	const handleHistoryOptionClick = (e) => {
		setShowHistory(true);
		setShowSummary(false);
	};

	const handleSummaryOptionClick = (e) => {
		setShowSummary(true);
		setShowHistory(false);
	};

	const handleNameClick = (e) => {
		setShowOptions(!showOptions);
		setShowSummary(false);
		setShowHistory(false);
	};
	return (
		<div style={screen}>
			<div onClick={handleNameClick}>{profileData.name}</div>
			<div style={{ display: showOptions ? 'flex' : 'none' }}>
				<div onClick={handleSummaryOptionClick}> Summary </div>
				<div onClick={handleHistoryOptionClick}> History </div>
			</div>
			<div style={{ display: showSummary ? 'block' : 'none' }}>
				<ul>
					{profileData.experience.map((e) => (
						<li>{e}</li>
					))}
				</ul>
			</div>
			<div style={{ display: showHistory ? 'block' : 'none' }}>
				{profileData.companies.map((company) => (
					<DataNode data={company} />
				))}
			</div>
		</div>
	);
}

export default AppV2;

