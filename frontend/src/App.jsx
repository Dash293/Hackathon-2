import Search from "@components/Search";
import Login from "@pages/Home";
import Projects from "@pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
