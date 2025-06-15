import "./App.css";
import { CoverLetter } from "./coverletter";
import { ContentLetter } from "./content-letter.js";
import { setSoftPrimaryColor } from "./utils/colorSetter.js";
function App() {
  setSoftPrimaryColor();
  return (
    <div className="App">
      <div className="bgImg"></div>
      <div className="px-4 pt-2">
        <CoverLetter />
        <ContentLetter />
      </div>
    </div>
  );
}

export default App;
