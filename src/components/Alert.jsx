import React from 'react';

const Alert = () => {
  return (
    <div className="alert alert-success border-0 shadow-sm alert-dismissible fade show my-3" role="alert">
      <strong>Success!</strong> Student records have been successfully updated.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;