import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="text-white p-2 px-3 rounded-3 mb-4 shadow-sm" style={{ background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)' }}>
      <small className="font-monospace">
        .breadcrumb / breadcrumb-item / Home / Students / <span className="fw-bold text-warning">Directory</span>
      </small>
    </div>
  );
};

export default Breadcrumb;