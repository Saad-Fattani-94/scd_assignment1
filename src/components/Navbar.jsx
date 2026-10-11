import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm" style={{ backgroundColor: '#1e1e2f' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-info" href="#">StudentPortal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item"><a className="nav-link text-light" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#">Students</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#">Courses</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#">Reports</a></li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <div className="dropdown">
              <button className="btn btn-link text-decoration-none text-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Settings
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Preferences</a></li>
              </ul>
            </div>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <button className="btn btn-info text-white" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;