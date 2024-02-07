import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AMzon prime.jpeg";
import projImg2 from "../assets/img/Airbnb Tableau.jpeg";
import projImg3 from "../assets/img/BIKE SALES IMAGE.jpeg";
import projImg4 from "../assets/img/Coffe sals image.jpeg";
import projImg5 from "../assets/img/COVID TABLEAU.jpeg";
import projImg6 from "../assets/img/Netflix TAbleau.jpeg";
import projImg7 from "../assets/img/WEB scraping.png";
import projImg8 from "../assets/img/SQL IMAGE2.jpeg";
import projImg9 from "../assets/img/SQL IMAGE1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Amazon Prime Video",
      link: "https://github.com/DevGupta0112/PowerBI/blob/main/AMAZON%20PRIME.pbix",
      imgUrl: projImg1,
    },
    {
      title: "Airbnb Tableau",
      link: "https://github.com/DevGupta0112/Tableau/blob/main/SEATTLE%20AIRBNB.twbx",
      imgUrl: projImg2,
    },
    {
      title: "Bike Sales",
      link: "https://github.com/DevGupta0112/Excel/blob/main/Bikes%20Sales.xlsx",
      imgUrl: projImg3,
    },
  ]
  const projects1 = [

    {
      title: "Covid Analysis",
      link: "https://github.com/DevGupta0112/Tableau/blob/main/COVID%20ANALYSIS.twbx",
      imgUrl: projImg5,
    },
    {
      title: "Web Scrapping",
      link: "https://github.com/DevGupta0112/Python_Jupiter/blob/main/WEB%20SCRAPPING.ipynb",
      imgUrl: projImg7,
    },
    {
      title: "Coffee Orders Analysis",
      link: "https://github.com/DevGupta0112/Excel/blob/main/Coffee%20Orders.xlsx",
      imgUrl: projImg4,
    },
  ]
  const projects2 = [
    {
      title: "Netflix Analysis",
      link: "https://github.com/DevGupta0112/Tableau/blob/main/NETFLIX.twbx",
      imgUrl: projImg6,
    },
    {
      title: "Analysis using Sql",
      link: "https://github.com/DevGupta0112/SQL-Server/blob/main/Covid%20Analysis%20(Tableau).sql",
      imgUrl: projImg9,
    },
    {
      title: "Data Cleaning",
      link: "https://github.com/DevGupta0112/SQL-Server/blob/main/Data%20Cleaning%20Nashville%20Housing.sql",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ cursor: "pointer" }}>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second"
                          style={{ cursor: "pointer" }}>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"
                          style={{ cursor: "pointer" }}>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgimg"></img>
    </section>
  )
}