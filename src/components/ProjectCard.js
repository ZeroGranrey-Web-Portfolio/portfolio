import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imageURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageURL} alt="Image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
