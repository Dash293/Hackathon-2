import { DateTime } from "luxon";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Header from "@components/Header";
import SIdeas from "@pages/Ideas/style";
import Light from "@assets/ampoule.png";
import axios from "axios";
import IdeaCard from "@components/IdeaCard";
import { useState, useEffect } from "react";

export default function Ideas() {
  function dateAdd(d) {
    return `${DateTime.fromISO(d).setLocale("fr").toFormat("MM-dd-yyyy")}`;
  }
  const [ideas, setIdeas] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/idees`).then(({ data }) => {
      setIdeas(data);
    });
  }, []);

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/idees`, formData)
      .then(() => {});
  };

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <Header />
      <Title title="Boîte à idées" />
      <SIdeas>
        <div className="first-container">
          <img src={Light} alt="" />
          <p className="text">
            Tu as une idée pour innover dans l’entreprise ? Un projet que tu
            souhaites réaliser avec Apside ?
          </p>
          <form action="" onSubmit={hSubmit}>
            <input
              type="name"
              placeholder="Ton idée en deux mots"
              value={formData.name}
              name="name"
              onChange={hChange}
            />
            <textarea
              type="description"
              value={formData.description}
              cols="50"
              rows="2"
              placeholder="Décris-nous plus en détails ton idée !"
              name="description"
              onChange={hChange}
            />
            <input type="submit" className="submit" onClick={hSubmit} />
          </form>
        </div>
        <div className="ideas-container">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              date={`${dateAdd(idea.launchDate)}`}
              name={idea.name}
              description={idea.description}
            />
          ))}
        </div>
      </SIdeas>
    </>
  );
}
