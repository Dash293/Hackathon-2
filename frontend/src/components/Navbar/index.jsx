import Profil from "@assets/profil.png";
import SNavbar from "./style";

export default function Navbar() {
  return (
    <SNavbar>
      <div className="container">
        <div className="profil">
          <img src={Profil} alt="profil" />
          <li>Prénom Nom</li>
          <p>prenom.nom@gmail.com</p>
        </div>
      </div>
    </SNavbar>
  );
}
