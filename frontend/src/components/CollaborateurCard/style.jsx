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
  margin-left: 36vw;

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-top: 1.5rem;
  }

  img {
    height: 30vh;
    width: auto;
  }

  @media screen and (max-width: 500px) {
    height: 100vh;
    width: 60vw;
    background: var(--colorBackgroundOrangeCard);
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto;

    h1 {
      margin-bottom: 2rem;
    }

    h2 {
      font-weight: bold;
      font-size: 1rem;
      margin-top: 1rem;
    }

    img {
      height: 30vh;
      width: auto;
    }
  }
`;
