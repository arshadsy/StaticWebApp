import { ProjectProfile } from './project-profile';
import { Summary } from './summary';

export function ContentLetter() {
	let targetId_s = 'summary';
	const handleScroll = (targetId) => {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		targetId_s = targetId
	};
	return (<>
		<div className="summary row m-4">
			<div className="col-lg-2"></div>
			<div className="col-md-12 col-lg-7">
				<div className='d-flex'>
					<button style={{ display: 'contents' }}> <h3 className={`card app-topic-head card-header fs-4 me-1 ${targetId_s === 'summary' ? 'active-tab' : ''}`} onClick={() => handleScroll('summary')}>Summary</h3></button>
					<button style={{ display: 'contents' }}> <h3 className={`card app-topic-head card-header fs-4 ${targetId_s !== 'summary' ? 'active-tab' : ''}`} onClick={() => handleScroll('project-profile')}>Professional History</h3></button>
				</div>
				<Summary />
				<ProjectProfile />
			</div>
		</div>
	</>);
}
