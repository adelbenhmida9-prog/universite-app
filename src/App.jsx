
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra@gmail.com",
      telephone: "+216 20 000 000",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Tunis",
    },
    {
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem@gmail.com",
      telephone: "+216 21 000 000",
      filiere: "Informatique",
      annee: "2ème année",
      groupe: "INFO 2",
      ville: "Sousse",
    },
  ]);

  const [filiereSelectionnee, setFiliereSelectionnee] =
    useState("Toutes");

  // Ajouter un étudiant
  const ajouterEtudiant = () => {
    const nouvelEtudiant = {
      prenom: "Ahmed",
      nom: "Ben Ali",
      email: `ahmed${Date.now()}@gmail.com`,
      telephone: "+216 22 222 222",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Sfax",
    };

    setEtudiants((anciensEtudiants) => [
      ...anciensEtudiants,
      nouvelEtudiant,
    ]);
  };

  // Supprimer un étudiant
  const supprimerEtudiant = (email) => {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter(
        (etudiant) => etudiant.email !== email
      )
    );
  };

  // Modifier le prénom
  const modifierPrenom = (email, nouveauPrenom) => {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.email === email
          ? { ...etudiant, prenom: nouveauPrenom }
          : etudiant
      )
    );
  };

  // Filtrer par filière
  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      filiereSelectionnee === "Toutes" ||
      etudiant.filiere === filiereSelectionnee
  );

  return (
    <div id="accueil">
      <Header />
      <Navbar />

      <main id="etudiants">
        <h2 className="titre-section">
          Liste des étudiants
        </h2>

        <button
          onClick={ajouterEtudiant}
          className="btn-ajouter"
        >
          Ajouter un étudiant
        </button>

        <div className="filtre">
          <label htmlFor="filiere">
            Filtrer par filière :
          </label>

          <select
            id="filiere"
            value={filiereSelectionnee}
            onChange={(e) =>
              setFiliereSelectionnee(e.target.value)
            }
          >
            <option value="Toutes">Toutes les filières</option>
            <option value="GLSI">GLSI</option>
            <option value="Informatique">Informatique</option>
          </select>
        </div>

        <p className="nombre-etudiants">
          Nombre d'étudiants : {etudiantsFiltres.length}
        </p>

        <div className="students-container">
          {etudiantsFiltres.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              {...etudiant}
              onSupprimer={supprimerEtudiant}
              onModifier={modifierPrenom}
            />
          ))}
        </div>

        {etudiantsFiltres.length === 0 && (
          <p className="aucun-etudiant">
            Aucun étudiant trouvé.
          </p>
        )}
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
