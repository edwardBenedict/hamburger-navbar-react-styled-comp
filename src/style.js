import styled from "styled-components";

export const Container = styled.div`
  background: #00adb5;
  height: 100vh;
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #e1f1dd;
  border-radius: 0 0 10px 10px;
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 4px;
    width: 25px;
    background: #00adb5;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
export const Logo = styled.a`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;

  span {
    font-weight: 400;
    font-size: 1.4rem;
    color: #00adb5;
  }
`;
