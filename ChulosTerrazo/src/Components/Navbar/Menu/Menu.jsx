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

export function Menu({ isMenuOpen, closeMenu, isDropdownOpen, toggleDropdown }) {
  return (
    <>
      <Overlay className={isMenuOpen ? "open" : ""} onClick={closeMenu} />
      <MenuContainer className={isMenuOpen ? "open" : "closed"}>
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
            <MenuItem as={NavLink} to="/productos/divisores" onClick={closeMenu}>
              Divisores
            </MenuItem>
            <MenuItem as={NavLink} to="/productos/sillas" onClick={closeMenu}>
              Sillas
            </MenuItem>
            <MenuItem as={NavLink} to="/productos/espejos" onClick={closeMenu}>
              Espejos
            </MenuItem>
            <MenuItem as={NavLink} to="/productos/mesas" onClick={closeMenu}>
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
