import React from "react";
import Logo from "../Logo/Logo"
import style from "../Navbar/Navbar.module.css"
import Button from "../Button/Button";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "../Navbar/Menu";
// import Home from "../Menu/Home"
// import ContactUs from "../Menu/ContactUs";
// import Attornys from "../Menu/Attornys";
// import PracticeAreas from "../src/Components/Menu/PracticeAreas";

const Navbar=()=>{
    return(
        <nav className={style.navbar}>
        <Logo/>
        <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/Home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/Attornys" activeStyle>
          Attorenys
          </MenuLink>
          <MenuLink to="/PracticeAreas" activeStyle>
            Practice Areas
          </MenuLink>
          <MenuLink to="/ContactUs" activeStyle>
            Contact Us
          </MenuLink>
        </Menu>
      </PrimaryNav>

         <Button children="Contact Now"/> 
        </nav>
    )
}

export default  Navbar;
    