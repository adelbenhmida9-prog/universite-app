
import { useState } from "react";

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
  const [coordonneesVisibles, setCoordonneesVisibles] =
    useState(false);

  const basculerInformations = () => {
    setCoordonneesVisibles(!coordonneesVisibles);
  };

  const modifierPrenom = () => {
    const nouveauPrenom = window.prompt(
      "Entrez le nouveau prénom :",
      prenom
    );

    if (
      nouveauPrenom !== null &&
      nouveauPrenom.trim() !== ""
    ) {
      onModifier(email, nouveauPrenom.trim());
    }
  };

  return (
    <div className="student-card">
      <h2>Fiche étudiant</h2>

      <p>
        <strong>Nom & Prénom :</strong> {prenom} {nom}
      </p>

      <p>
        <strong>Filière :</strong> {filiere}
      </p>

      <p>
        <strong>Année d'étude :</strong> {annee}
      </p>

      <p>
        <strong>Groupe :</strong> {groupe}
      </p>

      {coordonneesVisibles && (
        <div className="coordonnees">
          <p>
            <strong>Email :</strong> {email}
          </p>
          <p>
            <strong>Téléphone :</strong> {telephone}
          </p>
          <p>
            <strong>Ville :</strong> {ville}
          </p>
        </div>
      )}

      <button
        onClick={basculerInformations}
        className="btn-ajouter"
      >
        {coordonneesVisibles
          ? "Masquer les informations"
          : "Afficher les informations"}
      </button>

      <button
        onClick={modifierPrenom}
        className="btn-modifier"
      >
        Modifier le prénom
      </button>

      <button
        onClick={() => onSupprimer(email)}
        className="btn-supprimer"
      >
        Supprimer
      </button>
    </div>
  );
}

export default StudentCard;
