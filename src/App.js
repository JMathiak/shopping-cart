import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { useState } from "react";

import Test from "./Test";
import Header from "./components/Header";
function App() {
  const [text, setText] = useState("DC");
  const [text2, setText2] = useState("Sleepy");
  return (
    <div className="Container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Test text={text} />} />
          <Route path="/home" element={<Test text={text2} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
