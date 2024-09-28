import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  font-size: 24px;
  cursor: pointer;
  padding-bottom: 10px;
  color: var(--silverFull7);
  &:hover {
    transform: scale(1.2);
  }
`;

export const ToggleCart = styled.button`
  padding-bottom: 10px;

  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
  margin-right: 1em;
  color: var(--silverFull7);

  &:hover {
    transform: scale(1.2);
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: silver;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.5s ease-in-out; /* Transición más fluida */
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: start;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  opacity: 0;
  transition: opacity 0.5s ease-in-out; /* Agrega una transición suave */

  &.open {
    opacity: 1; 
  }
`;

export const MenuItem = styled.div`
  display: block;
  padding: 1rem 0;
  color: #85929e;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    color: black;
    letter-spacing: 2px;
  }
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

export const SearchButton = styled.button`
  margin: 0 0 0 1em;
  border: none;
  background: transparent;
  color: black;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background 0.3s ease;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
export const Dropdown = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  &.open {
    max-height: 300px; /* Ajusta según la cantidad de opciones */
  }
`;

export const DropdownMenu = styled.div`
  padding-left: 1rem;
  background: silver;
  border-left: 2px solid #ddd;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  ${MenuItem} {
    padding: 0.5rem 0;
  }
`;
