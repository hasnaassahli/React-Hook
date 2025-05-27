import React, { useState } from 'react';

function AddMovie({ setMovies }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    trailerURL: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prev) => [...prev, { ...form, id: Date.now() }]);
    setForm({ title: '', description: '', posterURL: '', rating: 0, trailerURL: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" required />
      <input name="posterURL" value={form.posterURL} onChange={handleChange} placeholder="Poster URL" className="border p-2 w-full" required />
      <input name="trailerURL" value={form.trailerURL} onChange={handleChange} placeholder="Trailer URL (embed)" className="border p-2 w-full" required />
      <input type="number" name="rating" value={form.rating} onChange={handleChange} placeholder="Rating" className="border p-2 w-full" required />
      <button type="submit" className="bg-bleu-600 text-white px-4 py-2 rounded">Add Movie</button>
    </form>
  );
}

export default AddMovie;
