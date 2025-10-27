import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

function JobCard({ job, onDelete, onEdit }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {job.company} — {job.location}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Salary: {job.salary}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/jobs/${job.id}`}>
          <Button size="small" variant="contained" color="info">View Details</Button>
        </Link>
        <Button size="small" variant="outlined" color="primary" onClick={onEdit}>Edit</Button>
        <Button size="small" variant="outlined" color="error" onClick={onDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;