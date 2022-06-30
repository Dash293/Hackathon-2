import styled from "styled-components";

export default styled.div`
  padding-left: 27vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1vh;

  img {
    width: 20vw;
    margin: 2vw 3vw 2vw 2vw;
  }
  h1 {
    margin-left: 3vw;
    color: var(--colorTextBlack);
  }
  @media screen and (max-width: 700px) {
    position: relative;
    top: -2px;
    height: 8vh;
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
    background-color: var(--colorBlueNavBar);

    img {
      display: none;
    }
    h1 {
      margin-left: 0;
      color: var(--colorTextWhite);
    }
  }
`;
