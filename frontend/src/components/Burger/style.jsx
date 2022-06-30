import styled from "styled-components";

export default styled.div`
  z-index: 1;
  .hamburger {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .burger {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: white;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  ul {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    margin-top: 5px;
    margin-right: 7px;
    position: fixed;
    right: 10px;
    top: 50px;
    background-color: white;
    opacity: 0.9;
    border-radius: 10px;
  }

  a {
    text-decoration: none;
    color: var(--white-color);
    font-size: 1.08rem;
  }

  li {
    height: 5vh;
    font-family: var(--font-familyBody);
    color: var(--colorTextBlack);
    width: 50vw;
    padding-top: 1rem;
    text-align: center;
  }

  .burger1 {
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  .burger2 {
    transform: ${(props) =>
      props.isOpen ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
  }

  .burger3 {
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media screen and (min-width: 700px) {
    .hamburger {
      display: none;
    }
  }
`;
