import logo from "@assets/logo-blanc.png";
import Style from "./style";

export default function Login() {
  return (
    <Style>
      <section className="logo-container">
        <img src={logo} className="logo" alt="logo-apside" />
      </section>
      <section className="container">
        <h1>Bienvenue sur Appside</h1>
        <div className="login-box">
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input className="button" type="submit" value="connexion" />
        </div>
      </section>
    </Style>
  );
}
