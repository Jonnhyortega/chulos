import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../Redux/cartSlice/cartSlice";
import {
  CartContainer,
  Title,
  CartItemsContainer,
  CartSubTotal,
  CartTotal,
  CheckoutButton,
  CloseButton,
  CheckoutBox,
  LinkToStore,
  Logo,
} from "./CartStyles";
import {
  ShippingBox,
  ShippBox1,
  ControlsInfoShipping,
  ControlsA,
} from "./ShippingBox/ShippingBoxStyles";
import { CardOfCart } from "./CardOfCart/CardOfCart";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "../ConfirmationModal/CofirmationModal";
import { formattedPrice } from "../../Redux/cartSlice/carUtils";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { LogoTitle } from "../Footer/FooterStyles";
// IMPORTS

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, hidden, shippingCost } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const cartRef = useRef(null);
  const [isModal, setIsModal] = useState(false);
  const [shippingModalOpen, setShippingModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (!hidden) {
          dispatch(toggleHiddenCart());
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch, hidden]);

  const handleCartClick = (event) => {
    event.stopPropagation();
  };

  const handleNavigate = (url) => {
    navigate(url);
  };

  const handleCloseCart = () => {
    dispatch(toggleHiddenCart());
  };

  const handleShipping = () => {
    setShippingModalOpen((prevState) => !prevState);
  };

  const cartTotal = Math.ceil(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
  );

  const handleClearCart = () => {
    dispatch(clearCart());
    setIsModal(false);
  };

  const handleCancel = () => {
    dispatch(toggleHiddenCart());
    setIsModal(false);
  };

  // INTEGRACION DE MERCADO PAGO
  // INTEGRACION DE MERCADO PAGO
  // INTEGRACION DE MERCADO PAGO
  const [preferencId, setPreferencId] = useState(null);
  const PUBLIC_KEY = "APP_USR-d7b16db4-a5c6-4a80-8123-1590a9a119a1";
  initMercadoPago(PUBLIC_KEY, {
    locale: 'es-AR', 
  });

  const createPreference = async () => {
    const listProducts = `Productos de que vas a comprar: ${cartItems
      .map((item) => item.quantity + item.name)
      .join(", ")}`;
    try {
      const response = await axios.post(
        "http://localhost:3000/create_preference",
        {
          title: listProducts,
          price: cartTotal,
          quantity: 1,
          currency_id: "ARS"
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    console.log("Has hecho click en iniciar compra");
    const id = await createPreference();
    if (id) {
      setPreferencId(id);
      console.log(preferencId);
    }
  };

  const customization = {
    checkout: {
      theme: {
        buttonBackground: 'black',

      },
    },
   };

  // INTEGRACION DE MERCADO PAGO
  // INTEGRACION DE MERCADO PAGO
  // INTEGRACION DE MERCADO PAGO

  return (
    <CartContainer
      hidden={hidden}
      ref={cartRef}
      onClick={handleCartClick}
      style={{ display: hidden ? "none" : "flex" }}
    >
      <CartItemsContainer>
        <Title>
          Carrito de compras
          <CloseButton onClick={handleCloseCart}>&times;</CloseButton>
        </Title>

        {cartItems.length ? (
          cartItems.map((item) => <CardOfCart key={item.id} cartItem={item} />)
        ) : (
          <>
            <span>Tu carrito está vacío</span>
            <LinkToStore to="/tienda" onClick={handleCloseCart}>
              Ver más productos
            </LinkToStore>
          </>
        )}
      </CartItemsContainer>
      {cartItems.length > 0 && (
        <CheckoutBox>
          <CartSubTotal>
            <p>Sub total sin envío: </p>
            <p>{formattedPrice(cartTotal)}</p>
          </CartSubTotal>

          {/* <ShippingBox>
            <ShippBox1 onClick={handleShipping}>
              <p>Medios de envío</p>
              <p>{shippingModalOpen ? "-" : "+"}</p>
            </ShippBox1>

            {shippingModalOpen && (
              <ControlsInfoShipping>
                <ControlsA>
                  <input type="number" placeholder="Código postal" />
                  <button>OK</button>
                </ControlsA>
                <a
                  target="blank"
                  href="https://www.correoargentino.com.ar/formularios/cpa"
                >
                  No sé mi código postal
                </a>
              </ControlsInfoShipping>
            )}
          </ShippingBox> */}

          <CartTotal>
            <p>Total: </p>
            <div>
              <p>{formattedPrice(cartTotal)}</p>
              <small>
                O{" "}
                <strong>
                  ${Math.ceil(cartTotal - (cartTotal * 15) / 100)}
                </strong>{" "}
                por transferencia bancaria
              </small>
              <a href="https://wa.me/5491158227373">Contactar por whatsapp</a>
            </div>
          </CartTotal>

          <CheckoutButton
            disabled={preferencId ? true : false}
            style={{
              backgroundColor: preferencId
                ? "transparent"
                : "var(--greenFull3)",
              color: preferencId ? "#333333" : "white",
            }}
            onClick={handleBuy}
          >
            {preferencId ? "Gracias por elegirnos" : "Iniciar compra"}
            {preferencId && <p>Chulo's design</p>}
          </CheckoutButton>
          {preferencId && (
            <Wallet initialization={{ preferenceId: preferencId }}
            customization={customization} />
          )}

          <LinkToStore to="/tienda" onClick={handleCloseCart}>
            Ver más productos
          </LinkToStore>
          {!preferencId ? (<Logo>Chulo´s</Logo>) : null }
        </CheckoutBox>
      )}

      {isModal && (
        <ConfirmationModal
          answer={"¿Desea vaciar el carrito?"}
          work1={handleClearCart}
          work2={handleCancel}
        />
      )}
    </CartContainer>
  );
};

export default Cart;
