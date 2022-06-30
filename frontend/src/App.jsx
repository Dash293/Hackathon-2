import Search from "@components/Search";
import Login from "@pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
