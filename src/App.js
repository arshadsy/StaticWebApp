import "./App.css";
import { CoverLetter } from "./coverletter";
import { ContentLetter } from "./content-letter.js";
import { setSoftPrimaryColor } from "./utils/colorSetter.js";
function App() {
  setSoftPrimaryColor();
  return (
    <div className="App">
      <div className="bgImg"></div>
      <CoverLetter />
      <ContentLetter />
    </div>
  );
}

export default App;
