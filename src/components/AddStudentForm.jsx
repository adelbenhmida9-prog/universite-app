
import { useState } from "react";
import "./AddStudentForm.css";

const formulaireInitial = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  filiere: "GLSI",
  annee: "2ème année",
  groupe: "GLSI 2",
  ville: "",
};

function AddStudentForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState(formulaireInitial);
  const [erreur, setErreur] = useState("");

  const modifierChamp = (e) => {
    const { name, value } = e.target;

    setFormData((ancien) => ({
      ...ancien,
      [name]: value,
    }));

    setErreur("");
  };

  const gererChangementFiliere = (e) => {
    const filiere = e.target.value;

    setFormData((ancien) => ({
      ...ancien,
      filiere,
      groupe: filiere === "GLSI" ? "GLSI 2" : "INFO 2",
    }));
  };

  const soumettreFormulaire = (e) => {
    e.preventDefault();

    const etudiant = {
      prenom: formData.prenom.trim(),
      nom: formData.nom.trim(),
      email: formData.email.trim().toLowerCase(),
      telephone: formData.telephone.trim(),
      filiere: formData.filiere,
      annee: formData.annee,
      groupe: formData.groupe.trim(),
      ville: formData.ville.trim(),
    };

    if (
      !etudiant.prenom ||
      !etudiant.nom ||
      !etudiant.email ||
      !etudiant.telephone ||
      !etudiant.groupe ||
      !etudiant.ville
    ) {
      setErreur("Remplissez tous les champs obligatoires.");
      return;
    }

    const messageErreur = onAdd(etudiant);

    if (messageErreur) {
      setErreur(messageErreur);
    }
  };

  return (
    <section className="formulaire-etudiant">
      <div className="formulaire-header">
        <div>
          <h2>Nouvel étudiant</h2>
          <p>Remplissez les coordonnées de l'étudiant.</p>
        </div>

        <button
          type="button"
          className="formulaire-close"
          onClick={onCancel}
          aria-label="Fermer le formulaire"
        >
          ×
        </button>
      </div>

      <form onSubmit={soumettreFormulaire}>
        <div className="formulaire-grille">
          <div className="champ-formulaire">
            <label htmlFor="prenom">Prénom *</label>
            <input
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={modifierChamp}
              placeholder="Ex. Ahmed"
              required
            />
          </div>

          <div className="champ-formulaire">
            <label htmlFor="nom">Nom *</label>
            <input
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={modifierChamp}
              placeholder="Ex. Ben Ali"
              required
            />
          </div>

          <div className="champ-formulaire">
            <label htmlFor="email">Adresse email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={modifierChamp}
              placeholder="etudiant@example.com"
              required
            />
          </div>

          <div className="champ-formulaire">
            <label htmlFor="telephone">Téléphone *</label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              value={formData.telephone}
              onChange={modifierChamp}
              placeholder="+216 ..."
              required
            />
          </div>

          <div className="champ-formulaire">
            <label htmlFor="filiereEtudiant">Filière *</label>
            <select
              id="filiereEtudiant"
              name="filiere"
              value={formData.filiere}
              onChange={gererChangementFiliere}
            >
              <option value="GLSI">GLSI</option>
              <option value="Informatique">Informatique</option>
            </select>
          </div>

          <div className="champ-formulaire">
            <label htmlFor="annee">Année d'étude *</label>
            <select
              id="annee"
              name="annee"
              value={formData.annee}
              onChange={modifierChamp}
            >
              <option>1ère année</option>
              <option>2ème année</option>
              <option>3ème année</option>
              <option>Master 1</option>
              <option>Master 2</option>
            </select>
          </div>

          <div className="champ-formulaire">
            <label htmlFor="groupe">Groupe *</label>
            <input
              id="groupe"
              name="groupe"
              value={formData.groupe}
              onChange={modifierChamp}
              required
            />
          </div>

          <div className="champ-formulaire">
            <label htmlFor="ville">Ville *</label>
            <input
              id="ville"
              name="ville"
              value={formData.ville}
              onChange={modifierChamp}
              placeholder="Ex. Mahdia"
              required
            />
          </div>
        </div>

        {erreur && (
          <p className="formulaire-erreur" role="alert">
            {erreur}
          </p>
        )}

        <div className="formulaire-actions">
          <button
            type="button"
            className="formulaire-btn-annuler"
            onClick={onCancel}
          >
            Annuler
          </button>

          <button type="submit" className="formulaire-btn-enregistrer">
            Enregistrer l'étudiant
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddStudentForm;
