import React from "react";
import { NavLink } from "react-router-dom";
import { SlArrowDown, SlMagnifier } from "react-icons/sl";
import {
  MenuContainer,
  MenuItem,
  SearchInput,
  Dropdown,
  DropdownMenu,
  Overlay,
  SearchButton,
  SearchContainer,
} from "./MenuStyles";
import { useState } from "react";

export function Menu({
  isMenuOpen,
  closeMenu,
  isDropdownOpen,
  toggleDropdown,
  scrollingInfo,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Overlay
        style={{ top: scrollingInfo ? "48px" : "0" }}
        className={isMenuOpen ? "open" : ""}
        onClick={closeMenu}
      />
      <MenuContainer
        style={{ top: scrollingInfo ? "48px" : "0" }}
        className={isMenuOpen ? "open" : "closed"}
      >
        {/* Search Container */}
        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar" />
          <SearchButton onClick={() => alert("Buscando...")}>
            <SlMagnifier />
          </SearchButton>
        </SearchContainer>

        {/* Menu Items */}
        <MenuItem as={NavLink} to="/" onClick={closeMenu}>
          Inicio
        </MenuItem>
        <MenuItem as="div" onClick={toggleDropdown}>
          Productos <SlArrowDown />
        </MenuItem>

        {/* Dropdown Menu */}
        <Dropdown className={isDropdownOpen ? "open" : ""}>
          <DropdownMenu>
            <MenuItem as={NavLink} to="/tienda" onClick={closeMenu}>
              Ir a tienda
            </MenuItem>
            <MenuItem
              as={NavLink}
              to="/tienda/divisores"
              onClick={closeMenu}
            >
              Divisores
            </MenuItem>
            <MenuItem as={NavLink} to="/tienda/sillas" onClick={closeMenu}>
              Sillas
            </MenuItem>
            <MenuItem as={NavLink} to="/tienda/espejos" onClick={closeMenu}>
              Espejos
            </MenuItem>
            <MenuItem as={NavLink} to="/tienda/mesas-bajas" onClick={closeMenu}>
              Mesas bajas
            </MenuItem>
          </DropdownMenu>
        </Dropdown>

        {/* Additional Menu Items */}
        <MenuItem as={NavLink} to="/nuestros-disenos" onClick={closeMenu}>
          Nuestros Diseños
        </MenuItem>
        <MenuItem as={NavLink} to="/sobre-nosotros" onClick={closeMenu}>
          Sobre Nosotros
        </MenuItem>
      </MenuContainer>
    </>
  );
}
