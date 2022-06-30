import Navbar from "@components/Navbar";
import Login from "@pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
