import Search from "@components/Search";
import CollaborateurID from "@pages/CollaborateurID";
import Login from "@pages/Login";
import Projects from "@pages/Projects";
import Ressources from "@pages/Ressources";
import Ideas from "@pages/Ideas";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/idees" element={<Ideas />} />
        <Route path="/collaborateurs" element={<Search />} />
        <Route path="/collaborateurs/:id" element={<CollaborateurID />} />
      </Routes>
    </div>
  );
}

export default App;
