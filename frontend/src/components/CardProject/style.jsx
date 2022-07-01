import styled from "styled-components";

export default styled.div`
  background-color: var(--colorBackgroundOrangeCard);
  border-radius: 15px;
  width: 18vw;
  margin-bottom: 5vh;

  -webkit-box-shadow: 10px 14px 19px -3px rgba(17, 12, 44, 0.44);
  box-shadow: 10px 14px 19px -3px rgba(17, 12, 44, 0.44);
  :hover {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
  img {
    padding-left: 10px;
    height: 8vh;
    background-size: contain;
    margin-top: 1vh;
  }
  p {
    padding-left: 10px;
    margin: 1vh 0 1vh 0;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
