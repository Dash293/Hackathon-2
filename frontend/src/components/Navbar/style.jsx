import styled from "styled-components";

export default styled.div`
  position: fixed;
  width: 27vw;
  height: 100vh;
  background: var(--colorBlueNavBar);

  .profil {
    display: flex;
    margin: 2rem;
    justify-content: space-around;
    width: 22.8vw;
    height: 15.3vh;
    background: #384152;
    border-radius: 25px;
  }
  .imgprofil {
    width: 4.1vw;
    margin: auto;
  }
  .photoprofil {
    width: 4.1vw;
    height: 7.6vh;
  }
  .detailprofil {
    width: 15vw;
    margin: auto;
  }
  h1 {
    font-family: var(--font-familyTitle);
    font-weight: 700;
    font-size: 26px;
    color: var(--colorTextWhite);
  }
  p {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 17px;
    color: var(--colorTextWhite);
  }

  ul {
    width: 27vw;
  }

  .button {
    width: 35px;
    height: 35px;
    margin-right: 3vw;
    margin-left: 2vw;
    margin-top: 2vh;
  }
  li {
    height: 10vh;
    color: var(--colorTextWhite);
    &:hover {
      background-color: var(--colorLightBlue);
    }
  }
`;
