import styled from "styled-components";

export default styled.div`
  .CardofIdea {
    background-color: #ecb78d;
    -webkit-box-shadow: 10px 14px 19px -3px rgba(17, 12, 44, 0.44);
    box-shadow: 10px 14px 19px -3px rgba(17, 12, 44, 0.44);
    width: 18vw;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    aspect-ratio: 1/1;
    padding: 1vw;

    p {
      font-family: var(--font-familyBody);
      line-height: 1rem;
      margin: 0.5rem;
    }
    h3 {
      font-family: var(--font-familyBody);
      font-weight: bold;
      line-height: 1rem;
      margin: 0.5rem;
    }
  }
  @media screen and (max-width: 700px) {
    .CardofIdea {
      width: 80vw;
    }
  }
`;
