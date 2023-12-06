import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './View/Login';
import Dashboard from './View/Dashboard_admin';
import EmployeeList from './View/Employees_admin';

function App() {
  return (
    <Router>
      <div className="App">
        {<Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Employees_admin" element={<EmployeeList />} /> 
        </Routes> }
      </div>
    </Router>
  );
}

export default App;
