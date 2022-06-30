import Navbar from "@components/Navbar";
import Styled from "./AppStyle";

function App() {
  return (
    <div className="App">
      <Styled>
        <Navbar />
        <main />
      </Styled>
    </div>
  );
}

export default App;
