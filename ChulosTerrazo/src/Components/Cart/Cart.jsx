import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../Redux/cartSlice/cartSlice";
import {
  CartContainer,
  CartItem,
  CartButton,
  CartTotal,
} from "./CartStyles"; 

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // Obtener items del carrito
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item)); 
  };

  const handleClearCart = () => {
    dispatch(clearCart()); 
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price.toLocaleString()}</p>
                <CartButton onClick={() => handleRemoveFromCart(item)}>Eliminar</CartButton>
              </div>
            </CartItem>
          ))}
          <CartTotal>Total: ${totalPrice.toLocaleString()}</CartTotal>
          <CartButton onClick={handleClearCart}>Vaciar Carrito</CartButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
