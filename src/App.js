import React from 'react';
import Timeline from './components/Timeline';
import Project from './components/Project';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/:link" element={<Project />} />
    </Routes>
  </BrowserRouter>
);

export default App;
