import styled, { keyframes } from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: var(--greenFull1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

export const HamburgerMenu = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  margin-left: 1em;

  cursor: pointer;
  padding-bottom: 10px;
  color: var(--silverFull7);
  transition-duration: 0.6s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ToggleCart = styled.button`
  padding-bottom: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  margin-right: 1em;
  cursor: pointer;
  color: var(--silverFull7);
  transition-duration: 0.6s;

  &:hover {
    transform: scale(1.1);
  }
`;
