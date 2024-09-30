import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { LogoNavbar } from "./LogoNavbar/LogoNavbar";
import { Menu } from "./Menu/Menu";
import { NavbarContainer, HamburgerMenu, ToggleCart } from "./NavbarStyles";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <NavbarContainer
      style={{
        transform: scrollingDown ? "translateY(-48%)" : "translateY(0)",
        transition: "transform 0.3s ease",
        alignItems: scrollingDown ? "end" : "center",
      }}
    >
      <HamburgerMenu onClick={toggleMenu}>&#9776;</HamburgerMenu>
      <LogoNavbar scrollingInfo={scrollingDown} />
      <ToggleCart>
        <FaShoppingBag />
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
