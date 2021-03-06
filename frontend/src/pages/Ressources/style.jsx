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
    -webkit-box-shadow: 10px 14px 19px -3px rgba(17, 12, 44, 0.44);
    box-shadow: 10px 14px 19px -3px rgba(17, 12, 44, 0.44);
  }
  img {
    width: 60%;
  }
  @media screen and (max-width: 700px) {
    padding-left: 0;
    width: 90vw;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    .card {
      width: 40%;
      margin: auto;
      margin-bottom: 5vh;
    }
  }
`;
