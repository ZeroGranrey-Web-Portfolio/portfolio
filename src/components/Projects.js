import {
  Col,
  Row,
  Container,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/img/project-img1.png";
import img2 from "../assets/img/project-img2.png";
import img3 from "../assets/img/project-img3.png";
import colorSharp from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Project-1",
      description:
        "dfkjdf djdj nfnfj bjdbnfbdfb bdbfjdbfjdbfjdbfjdb fdjbd bd   djb fjbd fjd djb",
      imageURL: img1,
    },
    {
      title: "Project-2",
      description: "s dfbsjhbdsj bjb jds fbhjdsfb jsdhfbh sj fbsd fbds",
      imageURL: img2,
    },
    {
      title: "Project-3",
      description: "k jfbsdk bfskfbskfsdk fkbsfkdsbkdsbfb",
      imageURL: img3,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              asf knsdlkfsnlsnfks
              flsksdbfkdjbfksdjbfsdbfdsbfjsdkfbjsdbjsdbfkjdsbfksb kb
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">Lorem Ipsum</TabPane>
                <TabPane eventKey="third">Lorem Ipsum</TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="Image" className="background-image-right" />
    </section>
  );
};

export default Projects;
