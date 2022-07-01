import styled from "styled-components";

export default styled.div`
  padding-left: 27vw;
  width: 69vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .first-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 10vw;
  }

  .ideas-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }

  @media screen and (max-width: 700px) {
    padding-left: 0;
    width: 90vw;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;
