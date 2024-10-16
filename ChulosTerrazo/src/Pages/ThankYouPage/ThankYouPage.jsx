// ThankYouPage.jsx
import React from "react";
import styled from "styled-components";
import ButtonFirst from "../../Components/Buttons/ButtonFirst/ButtonFirst";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  text-align: center;
`;

const Logo = styled.p`
  font-size: 4rem;
  font-weight: bold;
  font-family: "Dancing Script", cursive;
  color: black;
  margin: 0;
  filter: drop-shadow(0px 0px 5px black);
`;

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--greenFull1);
`;

const Message = styled.p`
  margin: 0px 0 40px 0;
  font-size: 1.2rem;
  color: #555;
`;

const ThankYouPage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <Container>
        <Logo>Chulos design</Logo>
      <Title>¡Gracias por tu compra!</Title>
      <Message>
        Tu pedido ha sido recibido, en breves nos estaremos comunicando.
      </Message>
      <ButtonFirst content={"Ir a home"} work={handleClick}>
        Volver a la página principal
      </ButtonFirst>
    </Container>
  );
};

export default ThankYouPage;
