import styled from "styled-components";
import avatar from "@assets/profil.png";

export default styled.div`
  max-width: 72vw;
  height: 90vh;
  padding-left: 28vw;

  .container {
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
    margin-bottom: 2rem;
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
  }
  .searchGrey {
    background-color: #384152;
  }
  .searchBlue {
    background-color: #202a38;
  }
  .searchResults {
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
  }
  .searchResults div {
    width: 45vw;
  }
  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: white;
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
  }
  @media screen and (max-width: 700px) {
    .searchResults div {
      width: 80vw;
      margin: auto;
    }
  }
`;
