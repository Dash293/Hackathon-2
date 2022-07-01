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
    margin-bottom: 3vh;
  }
  .text {
    font-family: var(--font-familyTitle);
    font-weight: bold;
    line-height: 1rem;
    margin: 0.5rem;
  }

  .ideas-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input,
  textarea {
    width: 25rem;
    height: 5vh;
    margin-top: 2vh;
    background-color: #38415243;
    text-align: center;
    color: var(--colorTextBlack);
    font-family: var(--font-familyBody);
    font-size: 1em;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #dadfe3;
    border-radius: 10px;
  }

  .submit {
    cursor: pointer;
    width: 15rem;
    height: 2.2rem;
    border-radius: 1.6rem;
    background: var(--colorBlueNavBar);
    color: white;
    font-size: 1em;
  }

  @media screen and (max-width: 700px) {
    padding-left: 0;
    width: 90vw;
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
      width: 20vw;
    }
    .text {
      width: 80%;
      text-align: center;
      font-family: var(--font-familyTitle);
      font-weight: bold;
      line-height: 1rem;
      margin: 0.5rem;
    }

    .ideas-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    input,
    textarea {
      width: 80vw;
      height: 5vh;
      margin-top: 2vh;
      background-color: #38415243;
      text-align: center;
      color: var(--colorTextBlack);
      font-family: var(--font-familyBody);
      font-size: 1em;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        #dadfe3;
      border-radius: 10px;
    }

    .submit {
      cursor: pointer;
      width: 15rem;
      height: 2.2rem;
      border-radius: 1.6rem;
      background: var(--colorBlueNavBar);
      color: white;
      font-size: 1em;
    }
  }
`;
