import PropTypes from "prop-types";
import SCardProject from "@components/CardProject/style";

export default function CardProject({
  name,
  client,
  launchDate,
  agence,
  logo,
}) {
  return (
    <SCardProject>
      <p>Démarré le {launchDate}</p>
      <p>{name}</p>
      <p>Client : {client}</p>
      <img src={`../../src/assets/${logo}`} alt="logo" />
      <p>{agence}</p>
    </SCardProject>
  );
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  launchDate: PropTypes.string.isRequired,
  agence: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

