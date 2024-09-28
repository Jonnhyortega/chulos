import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer,
  HamburgerMenu,
  Menu,
  MenuItem,
  SearchInput,
  ToggleCart,
  Dropdown,
  DropdownMenu,
  Logo,
  // CloseMenuButton,
  Overlay,
  SearchButton,
  SearchContainer,
} from "./NavbarStyles";
import { SlMagnifier, SlArrowDown } from "react-icons/sl";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleMenu}>&#9776;</HamburgerMenu>
      <Logo>Chulos</Logo>
      <small>Diseño de interiores</small>
      <ToggleCart>
        <FaShoppingBag />
      </ToggleCart>
      {isMenuOpen && (
        <>
          <Overlay
            className={isMenuOpen ? "open" : ""}
            onClick={() => setIsMenuOpen(false)}
          />
          <Menu ref={menuRef} className={isMenuOpen ? "open" : ""}>
            <SearchContainer>
              <SearchInput type="text" placeholder="Buscar" />
              <SearchButton onClick={() => alert("Buscando...")}>
                <SlMagnifier />
              </SearchButton>
            </SearchContainer>

            <MenuItem as={NavLink} to="/" onClick={toggleMenu}>
              Inicio
            </MenuItem>
            <MenuItem as="div" onClick={toggleDropdown}>
              Productos <SlArrowDown />
            </MenuItem>
            <Dropdown className={isDropdownOpen ? "open" : ""}>
              <DropdownMenu>
                <MenuItem
                  as={NavLink}
                  to="/productos/divisores"
                  onClick={toggleMenu}
                >
                  Divisores
                </MenuItem>
                <MenuItem
                  as={NavLink}
                  to="/productos/sillas"
                  onClick={toggleMenu}
                >
                  Sillas
                </MenuItem>
                <MenuItem
                  as={NavLink}
                  to="/productos/espejos"
                  onClick={toggleMenu}
                >
                  Espejos
                </MenuItem>
                <MenuItem
                  as={NavLink}
                  to="/productos/mesas"
                  onClick={toggleMenu}
                >
                  Mesas bajas
                </MenuItem>
              </DropdownMenu>
            </Dropdown>
            <MenuItem as={NavLink} to="/nuestros-disenos" onClick={toggleMenu}>
              Nuestros Diseños
            </MenuItem>
            <MenuItem as={NavLink} to="/sobre-nosotros" onClick={toggleMenu}>
              Sobre Nosotros
            </MenuItem>
          </Menu>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
