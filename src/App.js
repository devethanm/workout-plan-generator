import logo from './logo.svg';
import './App.css';

// Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// App Pages
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
