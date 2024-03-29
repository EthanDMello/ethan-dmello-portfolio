import "./App.css";

import Background from "./components/background";
import Window from "./components/Window";

function App() {
  return (
    <div className="App">
      <div>
        <Background />
      </div>
      <div className="window">
        <Window />
      </div>
    </div>
  );
}

export default App;
