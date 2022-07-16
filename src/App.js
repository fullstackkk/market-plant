import React from 'react'
import { Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
