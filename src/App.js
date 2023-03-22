import { HoverContextParent } from "./context/HoverContext";
import { Nav } from "./components";
import { Home } from "./views";
import "./assets/styles/index.css";

function App() {
  return (
    <div className="App">
      <HoverContextParent>
        <Nav />
        <Home />
      </HoverContextParent>
    </div>
  );
}

export default App;
