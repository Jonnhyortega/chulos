import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
import LogoNavbar from "../Navbar/LogoNavbar/LogoNavbar";
import { formattedPrice } from "../../Redux/cartSlice/carUtils";

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
    console.log("hola pa toy cerrando el carro");
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

          <CheckoutButton>Iniciar compra</CheckoutButton>
          <LinkToStore to="/tienda" onClick={handleCloseCart}>
            Ver más productos
          </LinkToStore>
          <Logo>Chulo´s</Logo>
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
