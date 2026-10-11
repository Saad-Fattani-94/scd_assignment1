import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import PageHeader from './components/PageHeader';
import StudentCard from './components/StudentCard';
import Pagination from './components/Pagination';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  const students = [
    { id: 101, name: 'Saad', major: 'BSSE', year: 2, gpa: 3.8, btnClass: '.btn-outline-primary' },
    { id: 102, name: 'Hanzala', major: 'BSCS', year: 2, gpa: 3.8, btnClass: '.btn-outline-danger' },
    { id: 103, name: 'abc', major: 'BSAI', year: 2, gpa: 3.8, btnClass: '.btn-outline-danger' },
    { id: 104, name: 'xyz', major: 'BSFT', year: 2, gpa: 3.8, btnClass: '.btn-outline-danger' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />

      <main className="container my-4 flex-grow-1">
        <Breadcrumb />
        <PageHeader />
        <div className="row">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
        <Pagination />
        <Alert />
      </main>
      <Footer />
    </div>
  );
}

export default App
