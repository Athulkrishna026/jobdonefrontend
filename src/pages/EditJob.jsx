import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getJobById, updateJob } from '../services/api';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

function EditJob() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: ''
  });
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await getJobById(id);
        setForm(response.data);
      } catch (error) {
        console.error('Error fetching job:', error);
        alert('Failed to load job details');
        navigate('/');
      }
    };
    fetchJob();
  }, [id, navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateJob(id, form);
      navigate('/');
    } catch (error) {
      console.error('Error updating job:', error);
      alert('Failed to update job. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Edit Job
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          name="title"
          label="Job Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="company"
          label="Company"
          value={form.company}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="location"
          label="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="salary"
          label="Salary"
          value={form.salary}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="description"
          label="Description"
          value={form.description}
          onChange={handleChange}
          required
          multiline
          rows={4}
        />
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: 'rgba(95, 47, 252, 1)' }}
          >
            Update Job
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default EditJob;