import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
