import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const onUpdateActiveLink = (route) => {
    setActiveLink(route);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link " : "navbar-link"
              }
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              href="#skills"
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              href="#projects"
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yaroslav-shlyahovchuk-076415227"
              >
                <img src={navIcon1} alt="" />
              </a>
            </div>

            <button
              className="vvd"
              onClick={() => {
                document.location.href = "#contact";
              }}
            >
              <span>Lets connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
