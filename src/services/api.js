import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jobdoneserver-1.onrender.com'
});

export const getJobs = () => API.get('/jobs');
export const postJob = job => API.post('/jobs', job);
export const getJobById = id => API.get(`/jobs/${id}`);
export const updateJob = (id, job) => API.put(`/jobs/${id}`, job);
export const deleteJob = id => API.delete(`/jobs/${id}`);