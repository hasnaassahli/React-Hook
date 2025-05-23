const Filter = ({ onTitleChange, onRatingChange }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Search by title"
      onChange={(e) => onTitleChange(e.target.value)}
    />
    <input
      type="number"
      min="0"
      max="10"
      placeholder="Minimum rating"
      onChange={(e) => onRatingChange(e.target.value)}
    />
  </div>
);

export default Filter;
