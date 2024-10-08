import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(17, 25, 40, 0);
`;

export const ModalContainer = styled.div`
  background-color: var(--silverFull7);
  padding: 20px;
  width: 400px;
  max-width: 80%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  border: 3px solid var(--greenFull1);
`;

export const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: var(--greenFull1);
  `;
  
  export const ModalMessage = styled.p`
  margin: 0;
  margin-bottom: 20px;
  color: black;
  font-size: 1.3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ConfirmButton = styled.button`
  background-color: var(--greenFull2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--greenFull4);
  }
`;

export const CancelButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:rgb(254, 52, 60);
  }
`;
