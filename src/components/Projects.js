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
import img1 from "../assets/img/project-image1.png";
import img2 from "../assets/img/project-image2.png";
import img3 from "../assets/img/project-image3.png";
import colorSharp from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Share Me",
      description: "Site for sharing and downloading pictures",
      url: "https://yaruk-shareme-app.netlify.app/",
      imageURL: img1,
    },
    {
      title: "Lyrics",
      description: "Site for listening music",
      url: "https://yaruk-music-site-lyriks.netlify.app/",

      imageURL: img2,
    },
    {
      title: "Keeper App",
      description: "Site for keeping notes",
      url: "https://yaruk-keeper-app-site.netlify.app/",
      imageURL: img3,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>My Projects</h2>
            <br />
            <TabContainer id="projects-tabs" defaultActiveKey="0">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center"
                id="pills-tab"
              >
                {projects.map((pr, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>{pr.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <TabContent>
                {projects.map((project, index) => {
                  return (
                    <TabPane key={index} eventKey={index}>
                      <Row className="container justify-content-center">
                        <ProjectCard {...project} />{" "}
                      </Row>{" "}
                    </TabPane>
                  );
                })}
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
