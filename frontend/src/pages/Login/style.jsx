import styled from "styled-components";

export default styled.div`
  background: var(--colorBlueNavBar);
  height: 100vh;

  .logo-container {
    height: 40vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 10vh;
    width: auto;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2vh;
  }

  h1 {
    font-weight: 700;
    font-size: 3.6rem;
    color: var(--colorTextWhite);
  }

  .login-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5vh;
  }

  input {
    width: 15rem;
    height: 1.6rem;
    margin-top: 2vh;
  }

  .button {
    cursor: pointer;
    width: 15rem;
    height: 2.2rem;
    border-radius: 1.6rem;
    background: var(--colorBackgroundOrangeCard);
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
