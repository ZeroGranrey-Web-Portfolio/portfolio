import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";
import bannerImg from "../assets/img/banner-bg.png";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Yaroslav Shliakhovchuk", "Fullstack Developer", "Batman"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(110);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    if (updateText === "") updateText = "\xa0";
    setText(updateText);
    if (isDeleting) {
      setDelta(45);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "\xa0") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50);
    }
  };

  return (
    <section
      className="banner"
      id="home"
      style={{
        backgroundImage: "url(" + bannerImg + ")",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className="tagline ">Welcome to my Portfolio</span>
                  <h1 className="hello">
                    {"Hi i'm "} <br />
                    <span className=" name">{text}</span>
                  </h1>
                  <p></p>
                  <button
                    onClick={() => {
                      document.location.href = "#contact";
                    }}
                  >
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
