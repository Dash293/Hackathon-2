import propTypes from "prop-types";
import SIdeaCard from "./style";

export default function IdeaCard({ key, date, name, description }) {
  return (
    <SIdeaCard>
      <div key={key} className="CardofIdea">
        <p>{date}</p>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </SIdeaCard>
  );
}

IdeaCard.propTypes = {
  key: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.number.isRequired,
};
