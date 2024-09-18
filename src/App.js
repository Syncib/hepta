import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Hotels from "./pages/Hotels/Hotels";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
