import PropTypes from "prop-types";
import logo from "@assets/logo-apside.png";
import STitle from "./style";

export default function Title({ title }) {
  return (
    <STitle>
      <h1>{title}</h1>
      <img src={logo} alt="logo-apside" />
    </STitle>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
