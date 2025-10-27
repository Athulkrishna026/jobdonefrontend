import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JobCard from '../components/JobCard';
import Swal from 'sweetalert2';
import { Grid, Typography, Box } from '@mui/material';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:3000/jobs');
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This job will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/jobs/${id}`);
        await fetchJobs();
        Swal.fire('Deleted!', 'Job has been removed.', 'success');
      } catch (error) {
        console.error('Error deleting job:', error);
        Swal.fire('Error!', 'Failed to delete job.', 'error');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/jobs/${id}/edit`);
  };

  return (
    <Box sx={{ padding: 4 }}>
<Typography 
  variant="h4" 
  align="center" 
  gutterBottom 
  sx={{ paddingTop: 2, paddingBottom: 2 }}
>
  All Jobs
</Typography>      <Grid container spacing={3}>
        {jobs.map(job => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <JobCard
              job={job}
              onDelete={() => handleDelete(job.id)}
              onEdit={() => handleEdit(job.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default JobList;