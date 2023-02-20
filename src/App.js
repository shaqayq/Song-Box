import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Song from './components/Song';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import './style/app.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Song />} />
          <Route path="/songDetail/:songId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
