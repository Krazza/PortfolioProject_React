import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js';
import Home from "./components/scripts/Home.js";
import About from "./components/scripts/About.js";
import Experience from "./components/scripts/Experience";
import Projects from "./components/scripts/Projects"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="experience" element={<Experience/>}/>
          <Route path="projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
