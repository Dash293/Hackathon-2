import styled from "styled-components";
import avatar from "@assets/profil.png";

export default styled.div`
  max-width: 72vw;
  height: 90vh;
  margin-left: 28vw;
  border: 2px dotted green;

  .test {
    border: 3px solid red;
    padding: auto 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
  }
  .avatar {
    border-radius: 50%;
    border: 1px solid black;
    aspect-ratio: 1/1;
    width: 6rem;
    background-image: url(${avatar});
    background-size: cover;
    margin: center;
  }
  .searchBar {
    padding: 2rem 1rem;
  }
  .searchBar input {
    height: 2rem;
    width: 30rem;
    font-size: 1, 2rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #dadfe3;
    border-radius: 10px;
    .searchResult {
    }
  }
`;
