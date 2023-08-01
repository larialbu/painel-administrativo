import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home'; 
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes> 
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/home" /> : <Login onLogin={setLoggedIn} />}
          />
          {loggedIn && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<Sales />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
