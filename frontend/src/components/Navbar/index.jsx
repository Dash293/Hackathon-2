import Profil from "@assets/profil.png";
import projects from "@assets/icon-projects.png";
import salaries from "@assets/icon-salaries.png";
import ressources from "@assets/icon-ressources.png";
import idea from "@assets/icon-idea.png";
import { Link } from "react-router-dom";
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
            <h1>Rémi Ménart</h1>
            <p>remi.menart@gmail.com</p>
          </div>
        </div>
        <div className="buttonnav">
          <ul>
            <Link to="/projets" style={{ textDecoration: "none" }}>
              <li>
                <img className="button" src={projects} alt="projets" />
                Projets
              </li>
            </Link>
            <Link to="/collaborateurs" style={{ textDecoration: "none" }}>
              <li>
                <img className="button" src={salaries} alt="salaries" />
                Collaborateurs
              </li>
            </Link>
            <Link to="/ressources" style={{ textDecoration: "none" }}>
              <li>
                <img className="button" src={ressources} alt="resources" />
                Ressources & outils
              </li>
            </Link>
            <Link to="/idees" style={{ textDecoration: "none" }}>
              <li>
                <img className="button" src={idea} alt="idea" />
                Boite à idées
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </SNavbar>
  );
}
