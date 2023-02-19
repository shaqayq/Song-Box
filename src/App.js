import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Song from './components/Song';
import Detail from './components/Detail';
import './style/app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Song />} />
          <Route path="/songDetail/:song" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
