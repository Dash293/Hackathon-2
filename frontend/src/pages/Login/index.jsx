import logo from "@assets/logo-blanc.png";
import LoginButton from "@components/LoginButton";
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
        </div>
        <LoginButton />
      </section>
    </Style>
  );
}
