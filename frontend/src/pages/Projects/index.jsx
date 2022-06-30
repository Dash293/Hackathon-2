import CardProject from "@components/CardProject";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import SProjects from "@pages/Projects/style";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Projet de création d'application",
      description: "description1",
      client: "BNP Paribas",
      launchDate: "29/06/2022",
      spot_available: 1,
      agence: "Agence de Lyon",
      logo: "logo-bnp-paribas.png",
    },
    {
      id: 2,
      name: "Projet de développement",
      description: "description2",
      client: "Maaf",
      launchDate: "25/06/2022",
      spot_available: 0,
      agence: "Agence de Lille",
      logo: "logo-maaf.png",
    },
    {
      id: 3,
      name: "Refonte du site web",
      description: "description3",
      client: "Caisse d'épargne",
      launchDate: "20/06/2022",
      spot_available: 1,
      agence: "Agence de Paris",
      logo: "logo-caisse-d-epargne.png",
    },
    {
      id: 4,
      name: "Projet de création d)application",
      description: "description4",
      client: "AXA",
      launchDate: "10/06/2022",
      spot_available: 1,
      agence: "Agence de Nantes",
      logo: "logo-axa.jpg",
    },
    {
      id: 1,
      name: "Projet de création d'application",
      description: "description1",
      client: "BNP Paribas",
      launchDate: "29/06/2022",
      spot_available: 1,
      agence: "Agence de Lyon",
      logo: "logo-bnp-paribas.png",
    },
    {
      id: 2,
      name: "Projet de développement",
      description: "description2",
      client: "Maaf",
      launchDate: "25/06/2022",
      spot_available: 0,
      agence: "Agence de Lille",
      logo: "logo-maaf.png",
    },
    {
      id: 3,
      name: "Refonte du site web",
      description: "description3",
      client: "Caisse d'épargne",
      launchDate: "20/06/2022",
      spot_available: 1,
      agence: "Agence de Paris",
      logo: "logo-caisse-d-epargne.png",
    },
    {
      id: 4,
      name: "Projet de création d)application",
      description: "description4",
      client: "AXA",
      launchDate: "10/06/2022",
      spot_available: 1,
      agence: "Agence de Nantes",
      logo: "logo-axa.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <Title title="Projets en cours" />
      <SProjects>
        {projects.map((project) => {
          return (
            <CardProject
              key={project.id}
              name={project.name}
              description={project.description}
              client={project.client}
              launchDate={project.launchDate}
              spot_available={project.spot_available}
              agence={project.agence}
              logo={project.logo}
            />
          );
        })}
      </SProjects>
    </>
  );
}
