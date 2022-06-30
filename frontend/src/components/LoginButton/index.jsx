import React from "react";
import { Link } from "react-router-dom";
import SLoginButton from "./style";

function LoginButton() {
  return (
    <Link to="/projets" style={{ textDecoration: "none" }}>
      <SLoginButton className="login" type="button">
        CONNEXION
      </SLoginButton>
    </Link>
  );
}

export default LoginButton;
