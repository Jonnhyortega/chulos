// Navbar.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { LogoNavbar } from "./LogoNavbar/LogoNavbar";
import { Menu } from "./Menu/Menu";
import {
  NavbarContainer,
  HamburgerMenu,
  ToggleCart,
  CartCount,
} from "./NavbarStyles";
import { toggleHiddenCart } from "../../Redux/cartSlice/cartSlice"; // Importar acción correctamente

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  const dispatch = useDispatch();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleCart = () => dispatch(toggleHiddenCart());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <NavbarContainer
      style={{
        transform: scrollingDown ? "translateY(-48%)" : "translateY(0)",
        transition: "transform 0.3s ease",
        alignItems: scrollingDown ? "end" : "center",
        background: scrollingDown ? "transparent" : "var(--greenFull1)",
      }}
    >
      <HamburgerMenu
        style={{ marginBottom: scrollingDown ? "15px" : "0",
          color: scrollingDown ? "black" : "var(--silverFull4)"
         }}
        onClick={toggleMenu}
      >
        &#9776;
      </HamburgerMenu>
      <LogoNavbar scrollingInfo={scrollingDown} />
      
      <ToggleCart  
      style={{color: scrollingDown ? "black": "var(--silverFull5)"}}
      onClick={toggleCart}>
        <FaShoppingBag />
        <CartCount style={{ top: scrollingDown ? "50px" : "16px",
          color: scrollingDown ? "black" : "var(--silverFull5)"
         }}>
          {cartItemsCount}
        </CartCount>
      </ToggleCart>

      {isMenuOpen && (
        <Menu
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          scrollingInfo={scrollingDown}
        />
      )}
    </NavbarContainer>
  );
};

export default Navbar;
