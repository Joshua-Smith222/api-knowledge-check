import React from 'react';

const HomePage = ({ formData, setFormData, onSubmit, error }) => {
  const categories = [
    { value: '9', label: 'General Knowledge' },
    { value: '21', label: 'Sports' },
    { value: '23', label: 'History' },
    { value: '17', label: 'Science & Nature' }
  ];

  const difficulties = ['easy', 'medium', 'hard'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the Trivia Quiz</h1>
      <p className="text-sm text-gray-600">Please fill in the details below to begin.</p>

      <div>
        <label className="block mb-1">First Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border"
        />
      </div>

      <div>
        <label className="block mb-1">Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Difficulty:</label>
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-2 border"
        >
          <option value="">Select Difficulty</option>
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>{diff}</option>
          ))}
        </select>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Start Quiz
      </button>
    </form>
  );
};

export default HomePage;
