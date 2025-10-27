import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { getJobs, deleteJob } from '../services/api';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Home() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await getJobs();
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await deleteJob(id);
        await fetchJobs(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting job:', error);
        alert('Failed to delete job. Please try again.');
      }
    }
  };

  return (
    <div>
      <div>
<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img 
    src="https://unblast.com/wp-content/uploads/2020/05/Job-Hunting-Illustration.jpg"
    alt="Job Portal Banner"
    style={{ width: '600px', objectFit: 'cover' }}
  />
</Box>
      </div>
      <section className="d-flex justify-content-between flex-md-nowrap px-4 w-100 p-5">
  <div className="col-md-6">
    <div className="box p-4 border rounded text-center text-dark">
      <h2>Designed to grab Jobs</h2>
      <h4>Get your first job with us</h4>
      <Link to="/post">
        <Button
          sx={{ backgroundColor: 'rgba(95, 47, 252, 1)', marginBottom: '1rem' }}
          className="text-white"
        >
          Post a Job
        </Button>
      </Link>

    </div>
  </div>

  <div className="col-md-6">
    <div className="box p-4 border rounded text-center text-dark">
      <h2>Jobs</h2>
      <h4>Display Available jobs</h4>
      <Link to="/jobs">
        <Button
          sx={{ backgroundColor: 'rgba(95, 47, 252, 1)', marginBottom: '1rem' }}
          className="text-white"
        >
          View all Jobs
        </Button>
      </Link>
      
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;