import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonText("Sending...");
      console.log(formDetails);
      let response = await fetch(
        "https://yaruk-portfolio.herokuapp.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        }
      );
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (error) {
      setStatus({ success: false, message: "Something Went Wrong" });
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    name="firstName"
                    type="text"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="lastName"
                    type="text"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="Last Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="email"
                    type="email"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="Email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="phone"
                    type="tel"
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="Phone Number"
                  />
                </Col>
                <Col className="px-1">
                  <textarea
                    row={6}
                    name="message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="Message"
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
