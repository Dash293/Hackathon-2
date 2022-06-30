// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SCardProject from "@components/CardProject/style";

export default function CardProject({
  description,
  client,
  launchDate,
  mainAgency,
  logo,
}) {
  return (
    <SCardProject>
      <p>Démarré le {launchDate}</p>
      <p>{description}</p>
      <p>Client : {client}</p>
      <img src={`../../src/assets/${logo}`} alt="logo" />
      <p>Agence de {mainAgency}</p>
    </SCardProject>
  );
}

CardProject.propTypes = {
  description: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  launchDate: PropTypes.string.isRequired,
  mainAgency: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
