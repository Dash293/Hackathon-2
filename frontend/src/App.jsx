import Search from "@components/Search";
import Login from "@pages/Login";
import Projects from "@pages/Projects";
import Ressources from "@pages/Ressources";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
