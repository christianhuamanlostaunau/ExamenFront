import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/empleados">Empleados</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;