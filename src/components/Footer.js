import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import footerImg from "../assets/img/footer-bg.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "url(" + footerImg + ")",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="text-center text-sm-end m-2">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yaroslav-shlyahovchuk-076415227"
              >
                <img src={navIcon1} alt="" />
              </a>
            </div>
            <p>Email: yaroslavshlyahovchuk@gmail.com</p>
            <p>CopyRight {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
