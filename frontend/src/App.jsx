import Navbar from "@components/Navbar";
import Search from "@components/Search";
import Login from "@pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
