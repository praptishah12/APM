import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style_dashboard_admin.css';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';

const Layout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <nav className="vertical-navbar">
        <div className="icons">
          <a href="#">
            <FiSettings />
          </a>
          <a href="#">
            <CgProfile />
          </a>
        </div>
        <div className="links">
          <Link to="/">Dashboard</Link>
          <Link to="/Employees_admin">Employees</Link>
          <Link to="/">Noticeboard</Link>
          <Link to="/">Generate Report</Link>
        </div>
      </nav>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
