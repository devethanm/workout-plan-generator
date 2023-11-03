import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

// Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// App Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
