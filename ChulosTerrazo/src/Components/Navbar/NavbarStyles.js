import styled, { keyframes } from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 998;
  appearance: none;
`;

export const Discount = styled.div`
  width: 100%;
`;

export const HamburgerMenu = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  padding: 0 1em;
  margin-left: 1em;
  cursor: pointer;
  transition-duration: 0.6s;
  font-weight: 900;
  &:hover {
    color: var(--silverFull7);
    transform: scale(1.3);
  }
`;

export const ToggleCart = styled.button`
  padding-bottom: 10px;
  background: transparent;
  border: none;
  font-size: 1.5em;
  margin-right: 1em;
  cursor: pointer;
  transition-duration: 0.6s;

  &:hover {
    color: var(--silverFull7);
  }
`;

export const CartCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: 900;
`;
