import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Phone from './components/Phones';
import Detail from './components/Detail';
import './style/app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Phone />} />
          <Route path="/phoneDetail/:phone" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
