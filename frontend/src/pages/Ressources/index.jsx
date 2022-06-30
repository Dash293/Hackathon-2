import Navbar from "@components/Navbar";
import Title from "@components/Title";
import SRessources from "@pages/Ressources/style";
import LogoSlack from "@assets/slack.png";
import LogoGoogleDrive from "@assets/google-drive.png";
import LogoFigma from "@assets/logo-figma.png";
import LogoTrello from "@assets/trello.png";
import LogoUdemy from "@assets/udemy.png";
import LogoGitHub from "@assets/GitHub-Logo.png";
import Header from "@components/Header";

export default function Ressources() {
  return (
    <>
      <Navbar />
      <Header />
      <Title title="Ressources & outils" />
      <SRessources>
        <div className="page">
          <p>
            Chez Apside, tout le monde utilise les mêmes outils pour travailler
            et pour communiquer. Cette harmonisation facilite la compréhension
            et l’entente entre chaque collaborateur, permet d’éviter les
            incohérences et les dysfonctionnements chronophages, et offre la
            possibilité de libérer du temps pour se concentrer sur des tâches à
            forte valeur ajoutée.
            <br />
            <br />
            Grâce à ces outils et ressources, Apside et ses collaborateurs
            gagnent en productivité globale pour l’entreprise !
          </p>
          <div className="cards-container">
            <div className="card">
              <a href="https://slack.com/intl/fr-fr/">
                <img src={LogoSlack} alt="Slack" />
              </a>
            </div>
            <div className="card">
              <a href="https://www.google.com/intl/fr/drive/">
                <img src={LogoGoogleDrive} alt="Google Drive" />
              </a>
            </div>
            <div className="card">
              <a href="https://www.figma.com/">
                <img src={LogoFigma} alt="Figma" />
              </a>
            </div>
            <div className="card">
              <a href="https://trello.com/">
                <img src={LogoTrello} alt="Trello" />
              </a>
            </div>
            <div className="card">
              <a href="https://www.udemy.com/">
                <img src={LogoUdemy} alt="Udemy" />
              </a>
            </div>
            <div className="card">
              <a href="https://github.com/">
                <img src={LogoGitHub} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </SRessources>
    </>
  );
}
