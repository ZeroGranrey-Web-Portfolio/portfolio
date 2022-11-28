import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formInitialDetails = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const form = useRef();

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
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: "Message was sent" });
          },
          (error) => {
            console.log(error.text);
            setStatus({ success: false, message: "Something went wrong" });
            setButtonText("Send");
          }
        );
    } catch (error) {
      setStatus({ success: false, message: "Something went wrong" });
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
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={8} className="px-1">
                  <input
                    name="user_name"
                    type="text"
                    value={formDetails.user_name}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="Your Name"
                  />
                </Col>
                <Col sm={8} className="px-1">
                  <input
                    name="user_email"
                    type="email"
                    value={formDetails.user_email}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="Email"
                  />
                  <textarea
                    row={8}
                    name="message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate(e)}
                    placeholder="Message"
                  />
                </Col>

                <Col sm={6} className="px-1">
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
