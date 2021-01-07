import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SideNav from "react-simple-sidenav";

import navStyles from "./navbar.module.css";
import { LogoWshadowDarkVertSm, PhoneNumber, HorizLogoMd } from "../images/index"

import { FaHome } from "react-icons/fa";

//then

const NavbarCustom = (props) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "light" : ""}
        variant="light"
        expand="lg"
        className={navStyles.headerNavbar}
        style={{
          color: 'red!important',fill: 'red'
        }}
      >
        <Container>
          <Nav.Item to="/">
            <Navbar.Brand as={Link} to="/">
              <img
                className="d-inline-block align-top"
                src={HorizLogoMd}
                alt="Logo"
                height="60"
              ></img>
            </Navbar.Brand>
          </Nav.Item>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0"
            onClick={() => setShowNav(true)}
          ></Navbar.Toggle>
          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              /*display: "flex",*/
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav
              className="ml-4 mr-auto"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              <Nav.Item to="/quienes-somos" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/quienes-somos" active={false}>
                  Quienes Somos
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              <Nav.Item to="/servicios" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/servicios" active={false}>
                  Servicios
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/contacto" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/contacto" active={false}>
                  Contacto
                </Nav.Link>
              </Nav.Item>

              <NavDropdown
                as={Link}
                href="/mas"
                to="/mas"
                eventKey="more"
                title="Más"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Dropdown Item 1{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 2
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 3
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="mr-1"></Nav>
          </Navbar>
          <SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {/*
		<img 
		  src=""
		  alt=""
		  style={{
			margin: 'auto'	
		  }} />
		*/}
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
            }}
            items={[
              <Link rel="preload" className={navStyles.navItem} to="/">
                <FaHome />
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/about">
                Quien Somos
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/contacto">
                Contacto
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/servicios">
                Servicios
              </Link>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff!important",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
            }}
            navStyle={{
              width: "70%",
              background: "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)",
              color: "inherit",
              maxHeight: "100vh",
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
