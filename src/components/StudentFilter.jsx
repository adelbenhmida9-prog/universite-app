
import "./StudentFilter.css";

function StudentFilter({ value, onChange }) {
  return (
    <div className="student-filter">
      <label htmlFor="student-filiere-filter">
        Filtrer par filière
      </label>

      <select
        id="student-filiere-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="Toutes">Toutes les filières</option>
        <option value="GLSI">GLSI</option>
        <option value="Informatique">Informatique</option>
      </select>
    </div>
  );
}

export default StudentFilter;
