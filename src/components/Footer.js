import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="align-item-center text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dev-kumar-gupta-1358a0250" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/DevGupta0112" target="blank">
                <img src={navIcon2} className="icon-footer" style={{ width: "80%" }} alt="img" />
              </a>
              <a href="https://www.instagram.com/devg_1201" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
