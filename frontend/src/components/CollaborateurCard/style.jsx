import styled from "styled-components";

export default styled.div`
  height: 100vh;
  width: 55vw;
  background: var(--colorBackgroundOrangeCard);
  border-radius: 1.5rem;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 36.5vw;
  font-family: var(--font-familyBody);

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  img {
    height: 30vh;
    width: auto;
    margin-bottom: 5vh;
  }
  @media screen and (max-width: 700px) {
    /* height: 100vh; */
    width: 100vw;
    background: var(--colorBackgroundOrangeCard);
    border-radius: 0;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 0;
    margin: auto;
    font-family: var(--font-familyBody);

    h1 {
      margin-bottom: 1rem;
    }

    h2 {
      font-weight: bold;
      font-size: 1rem;
      margin-top: 1.2rem;
    }

    img {
      height: 30vh;
      width: auto;
      margin-bottom: 5vh;
    }
  }
`;
