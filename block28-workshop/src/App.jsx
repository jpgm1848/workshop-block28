import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <MainSection />
      </div>
      <div id="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
