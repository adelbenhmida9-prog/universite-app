import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const etudiants = [
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra@gmail.com",
      telephone: "+216 20 000 000",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Tunis",
    },
    {
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem@gmail.com",
      telephone: "+216 21 000 000",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Sousse",
    },
  ];

  return (
    <div id="accueil">
      <Header />
      <Navbar />

      <main id="etudiants">
        <h2 className="titre-section">Liste des étudiants</h2>

        <div className="students-container">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              annee={etudiant.annee}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
            />
          ))}
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
