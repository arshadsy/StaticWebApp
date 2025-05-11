import { ProjectProfile } from './project-profile';
import { Summary } from './summary';
import { useState } from 'react'

export function ContentLetter(){
  const [tabIndex, setTabIndex] = useState(0);
  const showTab = ()=>{
		switch(tabIndex){
			case 0: return <Summary />
				break;
			case 1: return <ProjectProfile />
			break;
		}
	}
	
return(<>
<div className="summary row m-4">
            <div className="col-lg-2"></div>
            <div className="col-md-12 col-lg-7">
				<div className='d-flex'>
               <button style={{display: 'contents'}}> <h3 className={`card app-topic-head card-header fs-4 me-1 ${tabIndex===0?'active-tab':''}`} onClick={()=>setTabIndex(0)}>Summary</h3></button>
                <button style={{display: 'contents'}}> <h3 className={`card app-topic-head card-header fs-4 ${tabIndex===1?'active-tab':''}`} onClick={()=>setTabIndex(1)}>Professional History</h3></button>
		</div>
 					{showTab()}
	</div>
	</div>
</>);
}
