import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StoreWrapper = styled.div``;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 100px;
  background: transparent;
`;

export const StyledButton = styled(NavLink)`
  background: var(--greenFull1);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-decoration: none;
  &:hover {
    transform: translateY(-3px);
    background: var(--greenFull3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
