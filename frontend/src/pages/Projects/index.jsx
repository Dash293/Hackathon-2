import { DateTime } from "luxon";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProject from "@components/CardProject";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Header from "@components/Header";
import SProjects from "@pages/Projects/style";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/projets"}`)
      .then(({ data }) => {
        setProjects(data);
      });
  }, []);

  function date(d) {
    return `${DateTime.fromISO(d).setLocale("fr").toFormat("MM-dd-yyyy")}`;
  }

  return (
    <>
      <Navbar />
      <Header />
      <Title title="Projets en cours" />
      <SProjects>
        {projects.map((project) => {
          return (
            <CardProject
              key={project.id}
              name={project.name}
              description={project.description}
              client={project.client}
              launchDate={`${date(project.launchDate)}`}
              spot_available={project.spot_available}
              mainAgency={project.mainAgency}
              logo={project.logo}
            />
          );
        })}
      </SProjects>
    </>
  );
}
