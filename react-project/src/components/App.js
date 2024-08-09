import React from 'react';
import FirstPage from './one/FirstPage.js';
import SecPage from './two/SecPage.js';
import ThirdPage from './three/ThirdPage.js';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/recommend" element={<SecPage />} />
          <Route path="/custom" element={<ThirdPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
