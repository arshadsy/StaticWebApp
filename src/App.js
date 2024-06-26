import './App.css';
import { CoverLetter } from './coverletter';
import { ProjectProfile } from './project-profile';
import { Summary } from './summary';

function App() {
  return (
    <div className="App">
      <div className="bgImg"></div>
      <CoverLetter />
      <Summary />
      <ProjectProfile />
    </div>
  );
}

export default App;
