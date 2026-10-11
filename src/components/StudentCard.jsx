import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow border-0 text-center rounded-3 overflow-hidden">
        {/* Soft Colorful Avatar Box */}
        <div className="p-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#eef2f7', height: '170px' }}>
          <svg className="bi bi-person-fill text-primary" width="90" height="90" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>
        
        <div className="card-body text-start">
          <h4 className="card-title fw-bold text-dark mb-2">{student.name}</h4>
          <p className="card-text mb-1 text-muted"><strong>ID:</strong> {student.id}</p>
          <p className="card-text mb-1 text-muted"><strong>Major:</strong> {student.major}</p>
          <p className="card-text mb-1 text-muted"><strong>Year:</strong> {student.year}</p>
          <p className="card-text mb-3 text-muted"><strong>GPA:</strong> <span className="badge bg-success">{student.gpa}</span></p>
          
          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-primary btn-sm flex-fill">View Profile</button>
            <button className="btn btn-outline-danger btn-sm">Delete</button>
          </div>
          <div>
            <span className="badge bg-light text-primary border border-primary fw-normal">
              {student.btnClass}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;