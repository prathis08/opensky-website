import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<About />} /> {/* Placeholder until Products page is created */}
        <Route path="/packages" element={<About />} /> {/* Alias for products */}
        <Route path="/gallery" element={<Home />} /> {/* Gallery section is on the home page */}
        <Route path="/testimonials" element={<About />} /> {/* Placeholder until Testimonials page is created */}
        <Route path="/contact" element={<div style={{ padding: '100px 20px 20px 20px' }}><Contact /></div>} />
        <Route path="/terms" element={<About />} /> {/* Placeholder for Terms page */}
        <Route path="/privacy" element={<About />} /> {/* Placeholder for Privacy page */}
      </Routes>
    </div>
  );
}

export default App;