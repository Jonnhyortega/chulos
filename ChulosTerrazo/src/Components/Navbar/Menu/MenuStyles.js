import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: var(--silverFull5);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity 1s;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 1px 1px 5px var(--silverFull1);
  &.open {
    animation: ${slideIn} 0.5s forwards;
    opacity: 1;
  }

  &.closed {
    animation: ${slideOut} 0.5s forwards;
    opacity: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.45);
  transition: opacity 0.5s ease-in-out;
  / &.open {
    // opacity: 1;
  }
`;

export const MenuItem = styled.div`
  display: block;
  padding: 1rem 0;
  color: var(--silverFull1);
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

  transition-duration: 1s;

  &:hover {
    transform: scale(1.3);
  }
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
    max-height: 300px;
  }
`;

export const DropdownMenu = styled.div`
  padding-left: 1rem;
  background: var(--silverFull5);
  border-left: 2px solid #ddd;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  ${MenuItem} {
    padding: 0.5rem 0;
  }
`;
