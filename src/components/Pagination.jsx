import React from 'react';

const Pagination = () => {
  return (
    <nav className="d-flex justify-content-center my-4">
      <ul className="pagination pagination-md">
        <li className="page-item"><a className="page-link text-primary" href="#">Previous</a></li>
        <li className="page-item active"><a className="page-link bg-primary border-primary" href="#">1</a></li>
        <li className="page-item"><a className="page-link text-primary" href="#">2</a></li>
        <li className="page-item"><a className="page-link text-primary" href="#">3</a></li>
        <li className="page-item"><a className="page-link text-primary" href="#">Next</a></li>
      </ul>
    </nav>
  );
};

export default Pagination;