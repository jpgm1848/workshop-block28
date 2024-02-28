import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import RandomColor from "./RandomColor";

function MainSection() {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<RandomColor />} />
        </Routes>
      </div>
    </>
  );
}

export default MainSection;
