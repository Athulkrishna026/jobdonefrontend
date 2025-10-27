import React from 'react';

function JobForm({ form, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required />
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <input name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default JobForm;