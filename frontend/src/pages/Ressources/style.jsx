import styled from "styled-components";

export default styled.div`
  padding-left: 27vw;
  width: 69vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;

  .page {
    margin: 0.5rem;
  }

  a {
    text-align: center;
  }

  p {
    line-height: 1.4rem;
    text-align: justify;
    margin-bottom: 2rem;
    width: 100%;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    background-color: #aeb2b6;
    width: 18vw;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    aspect-ratio: 1/1;
  }
  img {
    width: 60%;
  }
`;
