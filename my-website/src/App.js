import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navbar";
import Agents from "./components/agents/Agents";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/agents" element={<Agents />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
