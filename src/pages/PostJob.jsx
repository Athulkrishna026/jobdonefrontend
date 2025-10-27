import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { postJob } from '../services/api';
import { Link } from 'react-router-dom';

function PostJob() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await postJob(form);
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Error posting job:', error);
  //     alert('Failed to post job. Please try again.');
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await postJob(form); // ✅ Keep using your modular API call
    Swal.fire({
      title: 'Success!',
      text: 'Job posted successfully.',
      icon: 'success',
      confirmButtonText: 'View Jobs'
    }).then(() => {
      navigate('/jobs'); // ✅ Redirect to job list after confirmation
    });
  } catch (error) {
    console.error('Error posting job:', error);
    Swal.fire({
      title: 'Error!',
      text: 'Failed to post job. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};



  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
        <h2 className="text-center mb-4">Post a Job</h2>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
            className="form-control"
            rows="4"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: 'rgba(95, 47, 252, 1)' }}>
          Submit
        </button>

        
      </form>
    </div>
  );
}

export default PostJob;