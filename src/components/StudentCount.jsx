

import "./StudentCount.css";

function StudentCount({ count }) {
  return (
    <p className="student-count">
      Nombre d'étudiants : {count}
    </p>
  );
}

export default StudentCount;
