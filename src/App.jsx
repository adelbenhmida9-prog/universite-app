import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div className="fiche">
      <h1>Fiche étudiant</h1>

      <div className="infos">
        <p><strong>Nom & Prénom :</strong> adel ben hamida</p>
        <p><strong>Email :</strong> adelbenhmida9@gmail.com</p>
        <p><strong>Téléphone :</strong> +216 54 576 087</p>
        <p>
          <strong>Filière :</strong> Génie Logiciel et Systèmes d’Information
        </p>
        <p><strong>Année d'étude :</strong></p>
        <p><strong>Groupe :</strong> GLSI 2</p>
        <p><strong>Ville :</strong> Mahdia</p>
      </div>
    </div>
  );
}

export default App;

