import styled from "styled-components";

export default styled.div`
  padding-left: 27vw;
  width: 69vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 700px) {
    padding-left: 0;
    width: 90vw;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;
