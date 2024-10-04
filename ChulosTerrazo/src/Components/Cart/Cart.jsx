import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../Redux/cartSlice/cartSlice";
import {
  CartContainer,
  Title,
  CartItemsContainer,
  CartTotal,
  CheckoutButton,
  CloseButton,
  CheckoutBox,
  EmptyButton,
  LogoTitle,
} from "./CartStyles";
import { CardOfCart } from "./CardOfCart/CardOfCart";
import { CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "../ConfirmationModal/CofirmationModal";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, hidden, shippingCost } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const cartRef = useRef(null);
  const [isModal, setIsModal] = useState(false);

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

  const handleCloseCart = () => {
    dispatch(toggleHiddenCart());
  };

  // const reDirectCheckout = () => {
  //   navigate("/checkout");
  //   dispatch(toggleHiddenCart());
  // };

  const cartTotal = Math.ceil(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0) +
      shippingCost
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
    <>
      <CartContainer hidden={hidden} ref={cartRef} onClick={handleCartClick}>
        <CloseButton onClick={handleCloseCart}>&times;</CloseButton>
        <CartItemsContainer>
          <Title>Carrito de compras </Title>
          {/* <LogoTitle>Chulo's</LogoTitle> */}

          {cartItems.length ? (
            cartItems.map((item) => (
              <CardOfCart key={item.id} cartItem={item} />
            ))
          ) : (
            <span>Tu carrito está vacío</span>
          )}
        </CartItemsContainer>
        {cartItems.length > 0 && (
          <CheckoutBox>
            <CartTotal>Total: ${cartTotal}</CartTotal>
            <CheckoutButton>Comprar</CheckoutButton>
            <EmptyButton onClick={() => setIsModal(true)}>
              <CiTrash />
            </EmptyButton>
          </CheckoutBox>
        )}
      </CartContainer>

      {isModal && (
        <ConfirmationModal
          answer={"¿Desea vaciar el carrito?"}
          work1={handleClearCart}
          work2={handleCancel}
        />
      )}
    </>
  );
};

export default Cart;
