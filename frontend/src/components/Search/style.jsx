import styled from "styled-components";
import avatar from "@assets/profil.png";

export default styled.div`
  max-width: 72vw;
  height: 90vh;
  padding-left: 28vw;
  a:link {
    text-decoration: none !important;
  }

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
  input {
    text-align: center;
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
    margin-bottom: 5vh;

    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
  }
  .searchResults div {
    width: 45vw;
  }
  h2 {
    font-family: var(--font-familyBody);
    text-decoration: none;
    text-align: center;
    font-size: 1.2rem;
    line-height: 2rem;
    color: white;
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
  }
  @media screen and (max-width: 700px) {
    padding-left: initial;
    margin: initial;
    width: 100vw;
    .avatar {
      display: none;
    }

    p {
      text-align: center;
      padding: 0 2rem;
    }

    .searchResults div {
      width: 80vw;
      padding: initial;
    }
    .container {
      width: 100vw;
    }

    .searchBar input {
      height: 2rem;
      width: 80vw;
      font-size: 1, 2rem;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        #dadfe3;
    }
  }
`;
