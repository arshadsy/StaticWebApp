import './App.css';
import { CoverLetter } from './coverletter';
import { ProjectProfile } from './project-profile';
import { Summary } from './summary';
import { ContentLetter } from './content-letter.js';

function App() {
	
  return (
    <div className="App">
      <div className="bgImg"></div>
      <CoverLetter />
      <ContentLetter />
    </div>
  );
}

export default App;
