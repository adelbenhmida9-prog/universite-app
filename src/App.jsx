
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";
import StudentFilter from "./components/StudentFilter";
import StudentCount from "./components/StudentCount";

import "./App.css";

const etudiantsInitiaux = [
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
];

function App() {
  const [etudiants, setEtudiants] = useState(etudiantsInitiaux);
  const [filiereSelectionnee, setFiliereSelectionnee] = useState("Toutes");
  const [formulaireOuvert, setFormulaireOuvert] = useState(false);

  const ajouterEtudiant = (nouvelEtudiant) => {
    const emailExiste = etudiants.some(
      (etudiant) =>
        etudiant.email.toLowerCase() === nouvelEtudiant.email.toLowerCase()
    );

    if (emailExiste) {
      return "Cette adresse email existe déjà.";
    }

    setEtudiants((anciens) => [...anciens, nouvelEtudiant]);
    setFiliereSelectionnee("Toutes");
    setFormulaireOuvert(false);

    return null;
  };

  const supprimerEtudiant = (email) => {
    setEtudiants((anciens) =>
      anciens.filter((etudiant) => etudiant.email !== email)
    );
  };

  const modifierPrenom = (email, nouveauPrenom) => {
    setEtudiants((anciens) =>
      anciens.map((etudiant) =>
        etudiant.email === email
          ? { ...etudiant, prenom: nouveauPrenom }
          : etudiant
      )
    );
  };

  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      filiereSelectionnee === "Toutes" ||
      etudiant.filiere === filiereSelectionnee
  );

  return (
    <div id="accueil">
      <Header />
      <Navbar />

      <main id="etudiants" className="dashboard">
        <section className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Student Management</h1>
            <p className="dashboard-subtitle">
              Gérez vos étudiants simplement depuis votre espace.
            </p>
          </div>

          <button
            type="button"
            className="btn-ajouter"
            onClick={() => setFormulaireOuvert(true)}
          >
            <span aria-hidden="true">＋</span>
            Ajouter un étudiant
          </button>
        </section>

        {formulaireOuvert && (
          <AddStudentForm
            onAdd={ajouterEtudiant}
            onCancel={() => setFormulaireOuvert(false)}
          />
        )}

        <StudentCount count={etudiants.length} />

        <section className="students-section">
          <div className="section-heading">
            <div>
              <h2>Liste des étudiants</h2>
              <p>Consultez les fiches et gérez les informations.</p>
            </div>

            <span className="resultat-badge">
              {etudiantsFiltres.length} résultat(s)
            </span>
          </div>

          <StudentFilter
            value={filiereSelectionnee}
            onChange={setFiliereSelectionnee}
          />

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
              Aucun étudiant trouvé pour cette filière.
            </p>
          )}
        </section>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
