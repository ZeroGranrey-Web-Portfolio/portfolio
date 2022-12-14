import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imageURL, url }) => {
  return (
    <Col sm={6} md={5} onClick={() => {}}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imageURL} alt="Image" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
