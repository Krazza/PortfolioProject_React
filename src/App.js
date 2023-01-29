import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/scripts/Welcome.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Welcome/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
