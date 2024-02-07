import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Projects" />
        <div className="proj-txtx">
          <a href={link} target="blank" style={{ color: "white", textDecoration: "none" }}><h4>{title}</h4>
          </a>
        </div>
      </div>
    </Col>
  )
}
