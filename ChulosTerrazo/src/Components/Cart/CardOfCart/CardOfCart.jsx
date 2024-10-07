import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../Redux/cartSlice/cartSlice";
import {
  Card,
  Thumbnail,
  Info,
  Name,
  Price,
  Controls,
  Quantity,
  QuantityControls,
  Button,
} from "./CardOfCartStyles";
import { CiCirclePlus, CiCircleMinus, CiTrash } from "react-icons/ci";
import ModalConfirmation from "../../ConfirmationModal/CofirmationModal";
export const CardOfCart = ({ cartItem }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const maxLengthTitle = 10;

  const handleIncrease = () => {
    dispatch(increaseQuantity(cartItem.id));
  };

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      setIsModalOpen(true);
    } else if (cartItem.quantity > 1) {
      dispatch(decreaseQuantity(cartItem.id));
    }
  };

  const handleDeleteItem = () => {
    dispatch(removeFromCart(cartItem.id));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleColorQuantity = () => {};
  return (
    <>
      <Card>
        <Thumbnail src={cartItem.img} alt={cartItem.title} />
        <Info>
          <Name>{cartItem.name}</Name>
          <Price>${cartItem.quantity * cartItem.price}</Price>
        </Info>
        <Controls>
          <QuantityControls>
            <Button onClick={handleDecrease}>
              <CiCircleMinus />
            </Button>
            <Quantity>{cartItem.quantity}</Quantity>
            <Button onClick={handleIncrease}>
              <CiCirclePlus />
            </Button>
          </QuantityControls>
          <Button onClick={() => setIsModalOpen(true)}>
            <CiTrash />
          </Button>
        </Controls>
      </Card>

      {isModalOpen && (
        <ModalConfirmation
          answer={"¿Desea quitar este producto del carrito?"}
          work1={handleDeleteItem}
          work2={handleCancel}
        />
      )}
    </>
  );
};
