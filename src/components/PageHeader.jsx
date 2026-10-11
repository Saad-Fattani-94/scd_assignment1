import React from 'react';

const PageHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
      <h2 className="fw-bold text-primary">Page Header</h2>
      <button className="btn text-white px-4 fw-semibold shadow-sm" style={{ background: 'linear-gradient(45deg, #00b09b, #96c93d)', border: 'none' }}>
        + Add New Student
      </button>
    </div>
  );
};

export default PageHeader;