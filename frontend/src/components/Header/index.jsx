import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/logo-blanc.png";
import Burger from "@components/Burger";
import SHeader from "./style";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <SHeader>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <Burger burger={burgerOpen} func={toggleBurger} />
    </SHeader>
  );
}
