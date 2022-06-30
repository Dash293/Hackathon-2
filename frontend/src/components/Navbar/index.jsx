import SNavbar from "./style";

export default function Navbar() {
  return (
    <SNavbar>
      <div className="container">
        <div className="profil">
          <li>Prénom Nom</li>
          <p>prenom.nom@gmail.com</p>
        </div>
      </div>
    </SNavbar>
  );
}
