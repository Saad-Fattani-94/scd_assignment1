import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3 mt-5" style={{ background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5 className="mb-3 text-info fw-bold">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-1"><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-1"><a href="#" className="text-light text-decoration-none">Computer Science</a></li>
              <li className="mb-1"><a href="#" className="text-light text-decoration-none">Courses</a></li>
              <li className="mb-1"><a href="#" className="text-light text-decoration-none">Reports</a></li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h5 className="mb-3 text-info fw-bold">Contact Info</h5>
            <p className="text-light mb-1">Contact Us</p>
            <p className="text-light mb-1">+92 123 456 7890</p>
            <p className="text-light mb-0">abc@studentportal.com</p>
          </div>
        </div>
        <hr className="border-secondary my-3" />
        <div className="text-center text-white-50">
          <small>© 2024 StudentPortal. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;