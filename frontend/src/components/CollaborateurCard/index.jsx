import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SCollaborateurCard from "./style";

function CollaborateurCard() {
  const [collaborateurData, setCollaborateurData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/collaborateurs/${id}`).then(({ data }) => {
      setCollaborateurData(data);
    });
  }, []);
  return (
    <SCollaborateurCard src={collaborateurData} className="container">
      <img
        src={`../../src/assets/profilePictures/${collaborateurData.profilePicture}`}
        alt="profile"
      />
      <h1>
        {collaborateurData.firstname} {collaborateurData.lastname}
      </h1>
      <h2>Email : {collaborateurData.email}</h2>
      <h2>Métier : {collaborateurData.role}</h2>
      <h2>Compétences : </h2>
      <h2>Github : {collaborateurData.github}</h2>
      <h2>Slack : {collaborateurData.slack}</h2>
      <h2>Agence : {collaborateurData.agency}</h2>
    </SCollaborateurCard>
  );
}

export default CollaborateurCard;
