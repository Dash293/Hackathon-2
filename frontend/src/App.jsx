import Login from "@pages/Login";
import Projects from "@pages/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
