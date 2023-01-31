import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
