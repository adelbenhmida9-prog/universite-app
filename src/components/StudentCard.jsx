

import { useState } from "react";
import "./StidentCard.css";

function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  annee,
  groupe,
  ville,
  onSupprimer,
  onModifier,
}) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  const initiales = `${prenom.charAt(0)}${nom.charAt(0)}`;

  const modifierPrenom = () => {
    const nouveauPrenom = window.prompt(
      "Entrez le nouveau prénom :",
      prenom
    );

    if (nouveauPrenom?.trim() && nouveauPrenom.trim() !== prenom) {
      onModifier(email, nouveauPrenom.trim());
    }
  };

  const supprimer = () => {
    if (window.confirm(`Supprimer ${prenom} ${nom} ?`)) {
      onSupprimer(email);
    }
  };

  return (
    <article className="student-card">
      <div className="student-card-header">
        <div className="student-avatar" aria-hidden="true">
          {initiales}
        </div>

        <span className="student-status">
          <span className="status-dot"></span>
          Étudiant
        </span>
      </div>

      <h3 className="student-name">
        {prenom} {nom}
      </h3>

      <span className="student-filiere">{filiere}</span>

      <div className="student-info">
        <p><strong>Année :</strong> {annee}</p>
        <p><strong>Groupe :</strong> {groupe}</p>
      </div>

      {coordonneesVisibles && (
        <div className="student-coordonnees">
          <p><strong>Email :</strong> {email}</p>
          <p><strong>Téléphone :</strong> {telephone}</p>
          <p><strong>Ville :</strong> {ville}</p>
        </div>
      )}

      <div className="student-card-actions">
        <button
          type="button"
          className="student-btn-infos"
          onClick={() => setCoordonneesVisibles((visible) => !visible)}
        >
          {coordonneesVisibles ? "Masquer les infos" : "Voir les infos"}
        </button>

        <button
          type="button"
          className="student-btn-modifier"
          onClick={modifierPrenom}
        >
          Modifier
        </button>

        <button
          type="button"
          className="student-btn-supprimer"
          onClick={supprimer}
        >
          Supprimer
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
