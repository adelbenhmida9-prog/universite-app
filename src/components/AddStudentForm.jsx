import { useState } from "react";
import "./AddStudentForm.css";

function StudentForm({ onAjouter }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const fichier = e.target.files[0];

    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      annee: anneeEtude,
      groupe,
      ville,
      image
    };

    onAjouter(nouvelEtudiant);

    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
  };

  return (
    <div className="student-form-container">
      <h2>Ajouter un étudiant</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" value={nom}
            onChange={(e) => setNom(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" id="prenom" value={prenom}
            onChange={(e) => setPrenom(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Téléphone :</label>
          <input type="tel" id="telephone" value={telephone}
            onChange={(e) => setTelephone(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="filiere">Filière :</label>
          <select id="filiere" value={filiere}
            onChange={(e) => setFiliere(e.target.value)} required>
            <option value="">Choisir une filière</option>
            <option value="GLSI">GLSI</option>
            <option value="DSI">DSI</option>
            <option value="RSI">RSI</option>
            <option value="Informatique">Informatique</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="anneeEtude">Année d'étude :</label>
          <select id="anneeEtude" value={anneeEtude}
            onChange={(e) => setAnneeEtude(e.target.value)} required>
            <option value="">Choisir une année</option>
            <option value="1ère année">1ère année</option>
            <option value="2ème année">2ème année</option>
            <option value="3ème année">3ème année</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="groupe">Groupe :</label>
          <input type="text" id="groupe" value={groupe}
            onChange={(e) => setGroupe(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="ville">Ville :</label>
          <input type="text" id="ville" value={ville}
            onChange={(e) => setVille(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image :</label>
          <input type="file" id="image" accept="image/*"
            onChange={handleImage} />
        </div>

        {image && (
          <img src={image} alt="Photo étudiant" className="student-preview" />
        )}

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default StudentForm;