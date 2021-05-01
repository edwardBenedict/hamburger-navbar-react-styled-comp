import React, { useState } from "react";
import { Nav, Hamburger, MenuLink, Menu, Logo } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">
        <i>{"<ed8en/>"}</i> <span>design</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/works">Works</MenuLink>
        <MenuLink
          href="https://github.com/edwardBenedict"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </MenuLink>
        <MenuLink href="/career">Career</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
