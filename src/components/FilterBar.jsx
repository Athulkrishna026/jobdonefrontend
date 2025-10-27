import React from 'react';

function FilterBar({ filters, setFilters }) {
  const handleChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input name="location" placeholder="Filter by location" value={filters.location} onChange={handleChange} />
      <input name="keyword" placeholder="Search by keyword" value={filters.keyword} onChange={handleChange} />
    </div>
  );
}

export default FilterBar;