import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;