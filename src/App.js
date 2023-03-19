import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";

//Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
