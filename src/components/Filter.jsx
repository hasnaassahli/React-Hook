import React from 'react';

function Filter({ setFilterTitle, setFilterRating }) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setFilterTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        className="border p-2 rounded w-32"
      />
    </div>
  );
}

export default Filter;

