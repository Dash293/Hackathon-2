import Profil from "@assets/profil.png";
import projects from "@assets/icon-projects.png";
import salaries from "@assets/icon-salaries.png";
import ressources from "@assets/icon-ressources.png";
import idea from "@assets/icon-idea.png";
import SNavbar from "./style";

export default function Navbar() {
  return (
    <SNavbar>
      <div className="container">
        <div className="profil">
          <div className="imgprofil">
            <img className="photoprofil" src={Profil} alt="profil" />
          </div>
          <div className="detailprofil">
            <h1>Prénom Nom</h1>
            <p>prenom.nom@gmail.com</p>
          </div>
        </div>
        <div className="buttonnav">
          <ul>
            <li>
              <img className="button" src={projects} alt="projets" />
              Projets
            </li>
            <li>
              <img className="button" src={salaries} alt="salaries" />
              Ressources & outils
            </li>
            <li>
              <img className="button" src={ressources} alt="resources" />
              Ressources & outils
            </li>
            <li>
              <img className="button" src={idea} alt="idea" />
              Boite à idées
            </li>
          </ul>
        </div>
      </div>
    </SNavbar>
  );
}
